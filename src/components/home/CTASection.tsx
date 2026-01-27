'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTASection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Ready to Transform Your AI Initiatives?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Take the first step toward unlocking the full potential of your AI solutions. 
              Schedule a consultation with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-primary-700 text-lg font-medium hover:bg-opacity-95 transition-colors duration-200 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/services"
                className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white text-lg font-medium hover:bg-white/10 transition-colors duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>
    </section>
  );
}