import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FiGithub />,
      url: 'https://github.com/lahcenbount',
    },
    {
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/lahcenbount',
    },
    {
      icon: <FiTwitter />,
      url: 'https://twitter.com/lahcenbount',
    },
    {
      icon: <FiInstagram />,
      url: 'https://instagram.com/lahcenbount',
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <span className="text-2xl font-bold text-white">
              <span className="text-indigo-400">{"<"}</span>
              Portfolio
              <span className="text-indigo-400">{"/>"}</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-2xl"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} Lahcen. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}