'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 pt-16 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold gradient-text">AKA Consulting</h3>
            <p className="text-secondary-600 dark:text-secondary-400 max-w-xs">
              Expert consulting in AI product management, software architecture, and market development.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-secondary-900 dark:text-secondary-50">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/usecases" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-secondary-900 dark:text-secondary-50">Contact</h4>
            <ul className="space-y-2">
              <li className="text-secondary-600 dark:text-secondary-400">
                <span className="font-medium text-secondary-800 dark:text-secondary-200">Email:</span>{' '}
                <a
                  href="mailto:kenneth@consulting-aka.com"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  kenneth@consulting-aka.com
                </a>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="inline-block mt-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-secondary-200 dark:border-secondary-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-secondary-600 dark:text-secondary-400">
            © {currentYear} AKA Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}