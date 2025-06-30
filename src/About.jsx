import { motion } from "framer-motion";

function About() {
  const skills = [
    "React",
    "Laravel",
    "MySQL",
    "Bootstrap",
    "TailwindCss",
    "WordPress",
  ];

  return (
    <section className="py-20 bg-dark-gradient" id="about">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="public\profile_img2.jpg"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-neon-purple shadow-neon"
              loading="lazy"
            />
          </motion.div>
          <div className="md:w-2/3">
            <motion.div
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Hi! I'm a passionate computer engineer and aspiring web
                developer dedicated to creating dynamic, user-friendly websites
                using the latest technologies. Beyond coding, I enjoy playing
                video games, strategic games like chess, and outdoor sports such
                as cricket. I also have a deep appreciation for literature,
                including poetry and novels. When I'm not immersed in tech or
                books, you'll find me enjoying movies, TV shows, anime, and
                exploring the vibrant worlds of music, manhwa, manhua, and
                manga.
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-neon-purple/40 text-white px-4 py-2 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(168, 85, 247, 0.6)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
