import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import PortfolioImage from '../assets/images/portfolio.png';  // Adjust the path if necessary
import MeteoWebAppImage from '../assets/images/web_app.jpg';
import BlogWebAppImage from '../assets/images/blog_wb_app.jpg';
import ManagWebAppImage from '../assets/images/manag_wb_app.png';
import CalcWebAppImage from '../assets/images/calc_web_app.png';

// Adjust the path if necessary


const projects = [
    {
      title: "Mon Portfolio",
      description: "Site web dynamique utilisant JavaScript pour afficher mes compétences et projets.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: PortfolioImage,
      github: "https://github.com/lahcenbount/my-portfolio",
      live: "#"
    },
    {
      title: "Application Météo",
      description: "Application météo en temps réel avec JavaScript permettant de consulter les prévisions.",
      tech: ["JavaScript", "API Météo"],
      image: MeteoWebAppImage,
      github: "https://github.com/lahcenbount/weather_app",
      live: "#"
    },
    {
      title: "Blog Statique",
      description: "Blog statique créé en HTML pour partager des articles et du contenu.",
      tech: ["HTML", "CSS"],
      image: BlogWebAppImage,
      github: "https://github.com/lahcenbount/blog_static",
      live: "#"
    },

    {
      title: "Gestionnaire de Stock pour Petites Entreprises",
      description: "Application de gestion de stock avec JavaScript pour les petites entreprises.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: ManagWebAppImage ,
      github: "https://github.com/lahcenbount/Gestionnaire-de-Stock-pour-une-Petite-Entreprise",
      live: "#"
    },
    {
      title: "Application Calculatrice",
      description: "Calculatrice en ligne construite avec JavaScript pour effectuer des opérations arithmétiques.",
      tech: ["JavaScript"],
      image: CalcWebAppImage,
      github: "https://github.com/lahcenbount/calculatric",
      live: "#"
    },
  ];
  

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
            Mes Projets
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une sélection de mes réalisations techniques les plus significatives
          </p>
        </motion.div>

        {/* Technology Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'React', 'Node.js', 'Firebase', 'Tailwind'].map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech === 'all' ? 'all' : tech)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === tech 
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}