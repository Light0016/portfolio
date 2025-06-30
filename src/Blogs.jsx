import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Blogs() {
  return (
    <section className="py-20 bg-dark-gradient" id="blog">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 tracking-tight">
          My Blogs
        </h2>
        <motion.div
          className="glass p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Explore my thoughts on coding, chess, anime, movies, tv shows and
            more. From poems to strategic insights, my blog captures my
            passions.
          </p>
          <NavLink
            to="/blog"
            className="inline-block bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-neon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit My Blogs
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Blogs;
