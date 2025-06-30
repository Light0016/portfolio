import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center py-20 relative overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y }}
      >
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm Raj
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            An aspiring Web Developer and Computer Engineer
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-neon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img
            src="public\profile_img1.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-neon-purple shadow-neon"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
