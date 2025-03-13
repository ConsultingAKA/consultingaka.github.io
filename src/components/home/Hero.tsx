'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background dark:from-secondary-900 dark:to-secondary-950"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-accent-100 dark:bg-accent-900/20 opacity-50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold leading-tight md:leading-tight"
            variants={item}
          >
            <span className="gradient-text">
              Transform Your AI Vision <br className="hidden sm:block" />
              Into Market Success
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto"
            variants={item}
          >
            Expert consulting in AI product management, 
            software architecture, and market development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            variants={item}
          >
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-lg font-medium transition-colors duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              href="/services"
              className="px-8 py-3 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 text-secondary-800 dark:text-secondary-200 text-lg font-medium hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-200 transform hover:scale-105"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature boxes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            {
              title: "AI Product Management",
              description: "Strategic guidance to define, develop, and deploy AI products that deliver real business value.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: "Software Architecture",
              description: "Expert design of scalable, maintainable systems optimized for AI workloads and business requirements.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: "Market Development",
              description: "Strategies to position your AI solution in the market and accelerate growth and adoption.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-soft dark:shadow-none p-8 border border-secondary-100 dark:border-secondary-700 transform transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}