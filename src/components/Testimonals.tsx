/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Elite Freelancers transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. The project was delivered on time and within budget.',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Working with Elite Freelancers was a game-changer for our startup. They built our entire platform from scratch and provided ongoing support. Highly recommended!',
      rating: 5,
      company: 'InnovateLab'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DesignStudio',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The team at Elite Freelancers is incredibly professional and skilled. They took our complex requirements and delivered a beautiful, functional solution.',
      rating: 5,
      company: 'DesignStudio'
    },
    {
      name: 'David Thompson',
      role: 'Product Manager, GrowthCorp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Outstanding work quality and communication. Elite Freelancers helped us scale our platform to handle millions of users. Their expertise is unmatched.',
      rating: 5,
      company: 'GrowthCorp'
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director, BrandForward',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'From concept to launch, Elite Freelancers was with us every step of the way. Their creative solutions and technical prowess made our project a huge success.',
      rating: 5,
      company: 'BrandForward'
    },
    {
      name: 'James Anderson',
      role: 'VP of Technology, FutureVision',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Elite Freelancers delivered beyond our expectations. Their innovative approach and dedication to quality made them the perfect partner for our digital transformation.',
      rating: 5,
      company: 'FutureVision'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, _index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-8 w-8 text-purple-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-300"></div>
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 text-sm">Trusted by leading companies:</div>
            {['TechStart', 'InnovateLab', 'DesignStudio', 'GrowthCorp', 'BrandForward'].map((company) => (
              <div key={company} className="text-gray-500 font-medium">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;