/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Users, Award, Rocket } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'We deliver projects 40% faster than industry standards without compromising quality.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards for all your projects.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support with dedicated project managers for seamless communication.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Handpicked developers with 5+ years of experience in cutting-edge technologies.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with unlimited revisions until you love the result.',
      gradient: 'from-red-400 to-rose-500'
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Future-proof architecture that grows with your business needs and requirements.',
      gradient: 'from-indigo-400 to-purple-500'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-us" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Elite Freelancers?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another development agency. We're your strategic partner in digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, _index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Animation */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;