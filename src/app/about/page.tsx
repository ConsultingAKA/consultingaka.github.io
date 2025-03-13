import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AKA Consulting',
  description: 'Learn about AKA Consulting, our mission, and our approach to AI product management and software architecture consulting.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">About AKA Consulting</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed">
              We are a specialized consulting firm focused on helping businesses succeed with their AI initiatives 
              through expert product management, software architecture, and market development strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-16 md:py-24 bg-white dark:bg-secondary-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                At AKA Consulting, our mission is to bridge the gap between AI innovation and real-world business value. 
                We believe that successful AI implementation requires not just technical expertise, but a strategic 
                approach to product management, architecture, and market positioning.
              </p>
              <p>
                We partner with companies at all stages of AI adoption—from those just beginning their AI journey 
                to organizations looking to optimize existing AI systems. Our goal is to help you transform cutting-edge 
                technology into sustainable business solutions that drive growth and competitive advantage.
              </p>
              <p>
                Through our expertise in AI product management, software architecture, and market development, 
                we provide the guidance and execution support needed to turn your AI vision into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="py-16 md:py-24 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              <span className="gradient-text">Our Approach</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-xl shadow-soft">
                <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Strategic Vision</h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  We start by understanding your business objectives and market position, then develop a strategic 
                  vision for how AI can create maximum value.
                </p>
              </div>
              
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-xl shadow-soft">
                <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Practical Execution</h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  We translate vision into actionable roadmaps and architectures that balance innovation with 
                  practical implementation considerations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-secondary-800 p-8 rounded-xl shadow-soft">
                <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Sustainable Results</h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  We focus on creating AI solutions that deliver immediate value while establishing a foundation 
                  for long-term success and scalability.
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our collaborative approach ensures we work closely with your team throughout the process, transferring knowledge 
                and building capabilities that will continue to serve your organization beyond our engagement.
              </p>
              <p>
                By combining deep technical expertise with business acumen, we help you navigate the complexities of AI adoption 
                and maximize the return on your AI investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Transform Your AI Initiatives?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how AKA Consulting can help you achieve your AI objectives.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-lg bg-white text-primary-700 text-lg font-medium hover:bg-opacity-95 transition-colors duration-200"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}