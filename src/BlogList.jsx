// src/BlogList.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <section className="py-20 bg-dark-gradient min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight">
          My Blogs
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {sortedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              pinned={blog.pinned}
              image={blog.image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default BlogList;
