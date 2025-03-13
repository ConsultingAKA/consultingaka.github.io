'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      quote: "AKA Consulting transformed our approach to AI product management. Their strategic guidance helped us prioritize the right features and bring our product to market 30% faster than planned.",
      author: "Sarah Johnson",
      role: "CTO, HealthTech Innovations",
      image: "/images/testimonial-1.jpg", // Replace with actual image when available
    },
    {
      quote: "The architecture recommendations provided by AKA Consulting allowed us to build a scalable foundation for our AI platform. We've seen a 40% improvement in system performance and significantly reduced our technical debt.",
      author: "Michael Chen",
      role: "VP of Engineering, FinTech Solutions",
      image: "/images/testimonial-2.jpg", // Replace with actual image when available
    },
    {
      quote: "Working with AKA Consulting on our market development strategy was game-changing. Their insights helped us position our AI solution effectively, resulting in a 65% increase in qualified leads within three months.",
      author: "Jessica Williams",
      role: "Director of Marketing, RetailAI",
      image: "/images/testimonial-3.jpg", // Replace with actual image when available
    },
  ];

  return (
    <section 
      ref={ref}
      className="py-24 bg-background-static dark:bg-secondary-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">What Our Clients Say</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400">
              Hear from organizations we've helped transform through strategic AI consulting
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-secondary-50 dark:bg-secondary-900 rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-900">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0908 8.25L6.09082 8.25V13.25L11.0908 13.25V8.25Z" fill="currentColor"/>
                  <path d="M11.0908 13.25C11.0908 16.5637 8.40454 19.25 5.09082 19.25V17.25C7.30039 17.25 9.09082 15.4596 9.09082 13.25H11.0908Z" fill="currentColor"/>
                  <path d="M22.0908 8.25L17.0908 8.25V13.25L22.0908 13.25V8.25Z" fill="currentColor"/>
                  <path d="M22.0908 13.25C22.0908 16.5637 19.4045 19.25 16.0908 19.25V17.25C18.3004 17.25 20.0908 15.4596 20.0908 13.25H22.0908Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="mb-6">
                <p className="text-secondary-700 dark:text-secondary-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary-300 dark:bg-secondary-700 mr-4 flex items-center justify-center">
                  {/* Replace with actual image when available */}
                  <svg className="h-6 w-6 text-secondary-400 dark:text-secondary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}