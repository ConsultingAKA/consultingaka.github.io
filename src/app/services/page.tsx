import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | AKA Consulting',
  description: 'Explore our consulting services in AI product management, software architecture, and market development for AI solutions.',
};

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy Development',
    description: 'Develop a comprehensive AI strategy aligned with your business goals, identifying high-value opportunities and implementation roadmaps.',
    details: [
      'Conduct AI opportunity assessment across your business',
      'Prioritize use cases based on business impact and feasibility',
      'Develop implementation roadmaps with clear milestones',
      'Define success metrics and measurement frameworks',
      'Assess organizational readiness and capability gaps'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'product-vision',
    title: 'Product Vision & Roadmap',
    description: 'Create compelling product visions and strategic roadmaps that balance technical feasibility, business needs, and market demands.',
    details: [
      'Define clear, inspiring product vision statements',
      'Develop strategic product roadmaps aligned with business objectives',
      'Prioritize features based on value and effort',
      'Create implementation timelines with resource requirements',
      'Design measurement frameworks to track success metrics'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'ai-architecture',
    title: 'AI Architecture Design',
    description: 'Design scalable, resilient system architectures optimized for AI/ML workloads, ensuring performance, maintainability, and cost-efficiency.',
    details: [
      'Design robust, scalable AI system architectures',
      'Optimize infrastructure for machine learning workloads',
      'Implement best practices for model deployment and management',
      'Design data pipelines for reliable, efficient data processing',
      'Ensure security, compliance, and governance requirements are met'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'technical-due-diligence',
    title: 'Technical Due Diligence',
    description: 'Comprehensive assessment of AI technical capabilities, codebase quality, scalability, and technical debt, with clear remediation plans.',
    details: [
      'Conduct comprehensive codebase reviews',
      'Assess current architecture and identify limitations',
      'Evaluate scalability, reliability, and performance',
      'Identify and prioritize technical debt',
      'Develop remediation plans with clear implementation steps'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 'ai-product-management',
    title: 'AI Product Management',
    description: 'End-to-end product management for AI initiatives, from conception to market success, including prioritization and feature definition.',
    details: [
      'Define AI product requirements and specifications',
      'Create user stories and acceptance criteria for AI features',
      'Develop effective prioritization frameworks',
      'Build and manage product backlogs',
      'Implement agile methodologies customized for AI development'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 'market-entry',
    title: 'Market Entry Strategy',
    description: 'Develop go-to-market strategies for AI products, including market positioning, pricing models, and customer acquisition approaches.',
    details: [
      'Analyze market landscape and competitive positioning',
      'Develop value proposition and messaging frameworks',
      'Design pricing strategies optimized for target segments',
      'Create customer acquisition and growth plans',
      'Build sales enablement materials and tools'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Comprehensive consulting solutions to drive your AI initiatives from concept to market success.
              Our services are tailored to your unique business challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 md:py-24 bg-white dark:bg-secondary-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div key={service.id} className="flex flex-col md:flex-row gap-8 md:gap-12" id={service.id}>
                  <div className={`md:w-2/5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="w-16 h-16 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-display font-bold mb-4 text-secondary-900 dark:text-secondary-50">
                      {service.title}
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className={`md:w-3/5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-secondary-50 dark:bg-secondary-900 rounded-xl p-8 h-full">
                      <h3 className="text-xl font-display font-semibold mb-6 text-secondary-900 dark:text-secondary-50">
                        What We Provide:
                      </h3>
                      <ul className="space-y-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-secondary-700 dark:text-secondary-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">
              Ready to Transform Your AI Initiatives?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how our services can help you achieve your business objectives.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-lg bg-white text-primary-700 text-lg font-medium hover:bg-opacity-95 transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}