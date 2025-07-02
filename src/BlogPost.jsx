// src/BlogPost.jsx
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === parseInt(id)) || {
          title: "Blog Not Found",
          description: "This blog post does not exist.",
          date: "",
          content: "",
          image: "",
        };
        setBlog(foundBlog);
      })
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  // Typing effect for title
  useEffect(() => {
    if (!blog) return;
    let index = 0;
    const text = blog.title;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedTitle(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [blog]);

  if (!blog) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <section className="min-h-screen bg-dark-gradient py-20 relative overflow-hidden">
      <Helmet>
        <title>{blog.title} | Raj Panta's Blog</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content="blog, coding, chess, anime, cricket" />
      </Helmet>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="max-w-5xl mx-auto px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* <NavLink
          to="/blog"
          className="text-neon-purple hover:text-neon-purple/80 underline mb-8 inline-block text-lg font-medium"
        >
          ← Back to Blog
        </NavLink> */}
        <motion.div
          className="glass p-8 md:p-12 rounded-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blog.image && (
            <motion.div
              className="relative w-full h-80 md:h-[500px] mb-10 overflow-hidden rounded-2xl shadow-neon"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
              <motion.h1
                className="absolute bottom-6 left-6 text-4xl md:text-5xl font-bold text-white tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {typedTitle}
              </motion.h1>
              {blog.pinned && (
                <span className="absolute top-6 right-6 bg-neon-purple text-white text-sm font-semibold px-4 py-2 rounded-full shadow-neon">
                  Pinned
                </span>
              )}
            </motion.div>
          )}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm font-medium">
              Posted on {blog.date}
            </p>

            <div
              className="text-gray-200 text-lg whitespace-pre-line leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BlogPost;
