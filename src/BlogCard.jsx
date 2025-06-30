// src/BlogCard.jsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function BlogCard({ id, title, description, date, pinned, image }) {
  return (
    <motion.div
      className={`glass p-6 rounded-xl mb-8 break-inside-avoid ${
        pinned ? "border-2 border-neon-purple shadow-neon" : ""
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: id * 0.1 }}
      whileHover={{
        y: -15,
        rotateX: 5,
        boxShadow: "0 15px 50px rgba(168, 85, 247, 0.5)",
      }}
    >
      <NavLink to={`/blog/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <h3 className="text-xl font-semibold text-white mb-2 hover:text-neon-purple transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <p className="text-gray-400 text-xs">Posted on {date}</p>
        {pinned && (
          <span className="inline-block mt-2 bg-neon-purple text-white text-xs font-semibold px-2 py-1 rounded">
            Pinned
          </span>
        )}
      </NavLink>
    </motion.div>
  );
}

export default BlogCard;
