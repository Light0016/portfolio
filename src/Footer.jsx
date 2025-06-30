import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-dark py-8">
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="mb-4">© 2025 Raj Panta. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Light0016"
            className="text-neon-purple hover:text-neon-purple/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/share/1BpRJeg6rn/"
            className="text-neon-purple hover:text-neon-purple/80 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/rajpanta016?igsh=cWxwZ3U4NHoxM2k3"
            className="text-neon-purple hover:text-neon-purple/80 transition-colors"
          >
            Instagram
          </a>
        </div>
        {/* <a
          href="/resume.pdf"
          download
          className="inline-block text-neon-purple hover:text-neon-purple/80 underline font-medium"
        >
          Download Resume
        </a> */}
      </motion.div>
    </footer>
  );
}

export default Footer;
