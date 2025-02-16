import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from '../assets/images/profile_img.jpg';  // Adjust the path if necessary


export default function About() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
                Je suis Lahcen
              </span>
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8">
              <TypeAnimation
                sequence={[
                  "Développeur en formation",
                  2000,
                  "Spécialiste en applications informatiques",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="font-mono"
              />
            </div>

            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              Actuellement, je suis en train de suivre une formation dans l'association Ahmed Al Hansali,
              qui propose des informations sur la façon de modifier les applications informatiques.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              onClick={() => {
                // Smooth scroll to the #projects section
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Voir mes projets
            </motion.button>
          </motion.div>

          {/* Image/Graphic Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Profile Image */}
              <img
                src={Image} // Replace with your image path
                alt="Lahcen"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}