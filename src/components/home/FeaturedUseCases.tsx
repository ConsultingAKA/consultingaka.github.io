'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeaturedUseCases() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const useCases = [
    {
      title: "AI Healthcare Diagnostic Tool",
      category: "Healthcare",
      description: "Developed comprehensive product strategy and architecture for an AI-powered diagnostic tool, resulting in 40% faster diagnosis and 30% cost reduction.",
      image: "/images/ai-healthcare.jpg", 
    },
    {
      title: "Financial Services NLP Platform",
      category: "Finance",
      description: "Designed scalable architecture for a natural language processing platform that analyzes financial documents, delivering 50% improvement in processing efficiency.",
      image: "/images/finance-nlp.jpg", 
    },
    {
      title: "Retail Demand Forecasting System",
      category: "Retail",
      description: "Created product roadmap and go-to-market strategy for an AI demand forecasting system, reducing inventory costs by 25% and stockouts by 35%.",
      image: "/images/retail-forecasting.jpg", 
    },
  ];

  return (
    <section 
      ref={ref}
      className="py-24 bg-secondary-50 dark:bg-secondary-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Featured Success Stories</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              See how our expertise has helped organizations transform their AI visions into reality
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/40 to-accent-500/40 z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block py-1 px-3 bg-white/90 dark:bg-secondary-900/90 rounded-full text-sm font-medium text-primary-700 dark:text-primary-400">
                    {useCase.category}
                  </span>
                </div>
                {/* Replace with actual image when available */}
                <div className="bg-secondary-300 dark:bg-secondary-700 h-full w-full flex items-center justify-center">
                  <svg className="h-12 w-12 text-secondary-400 dark:text-secondary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-display font-semibold text-secondary-900 dark:text-secondary-50 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  {useCase.description}
                </p>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link 
                  href="/usecases"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                >
                  <span>Read Full Case Study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/usecases"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200"
            >
              <span>View All Case Studies</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}