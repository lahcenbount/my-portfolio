import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
            Contact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discutons de vos projets ou opportunités de collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100"
                  required
                ></textarea>
              </div>

              {successMessage && (
                <div className="text-green-400 text-center">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-red-400 text-center">{errorMessage}</div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Envoyer le message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gray-800 rounded-xl shadow-lg">
                <FiMail className="text-3xl text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-1">Email</h3>
                <a href="mailto:lahcen@oukharmouch.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  lahcen@oukharmouch.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gray-800 rounded-xl shadow-lg">
                <FiPhone className="text-3xl text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl text-gray-300 mb-1">Téléphone</h3>
                <a href="tel:+212636688074" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  +212 6 36 68 80 74
                </a>
              </div>
            </div>

            <div className="flex space-x-6">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-xl shadow-lg hover:bg-indigo-600 transition-colors"
              >
                <FiGithub className="text-3xl text-gray-300" />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-xl shadow-lg hover:bg-indigo-600 transition-colors"
              >
                <FiLinkedin className="text-3xl text-gray-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}