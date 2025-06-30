import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "NewsDeLight",
      description:
        "A news website showcasing my laravel skills for CRUD management.",
      tech: "React, Laravel, MySQL, Bootstrap",
      thumbnail: "public/news_website.png",
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my skills and projects.",
      tech: "React, Tailwind CSS, Framer Motion",
      thumbnail: "public/portfolio_website.png",
      link: "/",
    },
    {
      id: 3,
      title: "ChessInsight",
      description:
        "A real time chess position extraction, analysis and commentary system",
      tech: "React,Python",
      thumbnail: "public/chess_project.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-dark" id="projects">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass p-6 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: project.id * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                rotateX: 5,
                boxShadow: "0 15px 50px rgba(168, 85, 247, 0.5)",
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <p className="text-gray-400 text-xs mb-4">Tech: {project.tech}</p>
              <a
                href={project.link}
                className="inline-block text-neon-purple hover:text-neon-purple/80 underline font-medium"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
