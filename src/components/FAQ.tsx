import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a typical project take to complete?',
      answer: 'Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, Python, TypeScript, and cloud platforms like AWS and Google Cloud. We stay current with the latest trends and choose the best technology stack for each project.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our support plans range from 30 days to 1 year depending on your chosen package.'
    },
    {
      question: 'Can you work with our existing team or systems?',
      answer: 'Absolutely! We have extensive experience integrating with existing teams, systems, and workflows. We can work with your current development team, adapt to your preferred tools, and ensure seamless integration with your existing infrastructure.'
    },
    {
      question: 'What is your development process like?',
      answer: 'We follow an agile methodology with regular communication and milestone deliveries. Our process includes discovery, planning, design, development, testing, and deployment phases. You\'ll receive regular updates and have opportunities to provide feedback throughout.'
    },
    {
      question: 'Do you handle both frontend and backend development?',
      answer: 'Yes, we\'re a full-stack development team. We handle everything from user interface design and frontend development to backend APIs, database design, server setup, and deployment. We provide end-to-end solutions.'
    },
    {
      question: 'What if I need changes after the project is completed?',
      answer: 'We include a certain number of revisions in each package, and we\'re always available for additional changes or enhancements. We can discuss ongoing maintenance agreements or handle changes on a project basis.'
    },
    {
      question: 'How do you ensure project security and data protection?',
      answer: 'Security is our top priority. We implement industry-standard security practices including encrypted communications, secure coding practices, regular security audits, and compliance with data protection regulations like GDPR and CCPA.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="h-5 w-5 text-purple-400" />
            <span className="text-gray-300 font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Questions?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the most common questions we get from our clients. If you don't see your question here, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
              >
                <span className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-4"></div>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              We're here to help! Get in touch with our team for personalized answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;