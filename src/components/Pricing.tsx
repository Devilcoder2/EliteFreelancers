import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: 'per project',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      icon: Zap,
      gradient: 'from-green-400 to-emerald-500',
      popular: false,
      features: [
        'Responsive Web Design',
        'Basic SEO Optimization',
        'Mobile-First Approach',
        'Contact Form Integration',
        '30 Days Support',
        'Basic Analytics Setup',
        'Content Management System',
        'Social Media Integration'
      ]
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'per project',
      description: 'Ideal for growing businesses that need advanced features and functionality.',
      icon: Crown,
      gradient: 'from-purple-400 to-blue-500',
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced SEO & Performance',
        'E-commerce Integration',
        'Payment Gateway Setup',
        '90 Days Support',
        'Advanced Analytics',
        'Custom API Development',
        'Database Integration',
        'Security Implementation',
        'Performance Optimization'
      ]
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: 'per project',
      description: 'For large organizations requiring custom solutions and dedicated support.',
      icon: Rocket,
      gradient: 'from-orange-400 to-red-500',
      popular: false,
      features: [
        'Everything in Professional',
        'Custom Architecture Design',
        'Scalable Infrastructure',
        'Advanced Security Features',
        '1 Year Support & Maintenance',
        'Dedicated Project Manager',
        'Priority Support',
        'Performance Monitoring',
        'Custom Integrations',
        'Training & Documentation',
        'Multi-platform Development',
        'Load Testing & Optimization'
      ]
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
    <section id="pricing" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your project. No hidden fees, no surprises. Just exceptional value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/50 scale-105' 
                  : 'bg-gray-900/50 border-gray-700'
              } backdrop-blur-sm border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-purple-500'
                }`}
              >
                Get Started
              </motion.button>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Contact Us for Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;