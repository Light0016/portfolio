import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    emailjs
      .send(
        "service_light016", // Your Service ID
        "template_light016", // Your Template ID
        formData,
        "BhybO6agTeNtELluR" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="py-20 bg-dark-gradient" id="contact">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight">
          Get in Touch
        </h2>

        <motion.div
          className="glass p-8 rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-gray-200 text-sm font-medium mb-2 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark/50 text-white border border-neon-purple/30 rounded-lg p-3 focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="Your Name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-200 text-sm font-medium mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark/50 text-white border border-neon-purple/30 rounded-lg p-3 focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="Your Email"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-gray-200 text-sm font-medium mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark/50 text-white border border-neon-purple/30 rounded-lg p-3 focus:outline-none focus:border-neon-purple transition-colors"
                rows="5"
                placeholder="Your Message"
                disabled={isSubmitting}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
            {status && (
              <p
                className={`text-sm text-center mt-4 ${
                  status.includes("successfully")
                    ? "text-neon-purple"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
