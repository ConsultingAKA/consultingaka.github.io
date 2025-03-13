import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases | AKA Consulting',
  description: 'Explore real-world examples of how AKA Consulting has helped organizations succeed with AI product management and software architecture.',
};

const useCases = [
  {
    id: 'healthcare-diagnostics',
    title: 'AI Healthcare Diagnostic Tool',
    category: 'Healthcare',
    description: 'Developed comprehensive product strategy and architecture for an AI-powered diagnostic tool, resulting in 40% faster diagnosis and 30% cost reduction.',
    challenge: 'A healthcare technology company wanted to develop an AI-powered diagnostic tool that could analyze medical images and provide preliminary diagnoses to support medical professionals. They faced challenges in creating a scalable architecture, ensuring regulatory compliance, and developing a product strategy that would gain adoption in a conservative healthcare market.',
    solution: [
      'Conducted comprehensive market research to understand user needs and competitive landscape',
      'Developed product strategy focusing on augmenting rather than replacing healthcare professionals',
      'Designed scalable, HIPAA-compliant architecture optimized for ML workloads',
      'Created implementation roadmap prioritizing high-value diagnostic categories',
      'Developed go-to-market strategy targeting early adopter healthcare institutions'
    ],
    results: [
      '40% reduction in time to diagnosis for supported conditions',
      '30% decrease in diagnostic costs',
      'Successful deployment in 12 healthcare institutions within first year',
      'Regulatory approval obtained in 9 months, ahead of schedule',
      'Raised $15M in Series B funding based on initial success metrics'
    ],
    image: '/images/ai-healthcare.jpg', 
  },
  {
    id: 'financial-nlp',
    title: 'Financial Services NLP Platform',
    category: 'Finance',
    description: 'Designed scalable architecture for a natural language processing platform that analyzes financial documents, delivering 50% improvement in processing efficiency.',
    challenge: 'A financial services firm needed to develop a natural language processing (NLP) platform to automatically extract, analyze, and categorize information from thousands of financial documents daily. They struggled with accuracy, scalability concerns, and integrating the solution with their existing systems.',
    solution: [
      'Conducted technical assessment of existing document processing workflows',
      'Designed modular NLP architecture with specialized components for different document types',
      'Implemented progressive training approach to continuously improve accuracy',
      'Created seamless integration layer with existing financial systems',
      'Developed custom dashboards to monitor system performance and accuracy'
    ],
    results: [
      '50% improvement in document processing efficiency',
      '78% reduction in manual review requirements',
      'Increased document processing accuracy from 82% to 94%',
      'System now processes over 50,000 documents daily with minimal human intervention',
      'ROI achieved within 7 months of deployment'
    ],
    image: '/images/finance-nlp.jpg', 
  },
  {
    id: 'retail-forecasting',
    title: 'Retail Demand Forecasting System',
    category: 'Retail',
    description: 'Created product roadmap and go-to-market strategy for an AI demand forecasting system, reducing inventory costs by 25% and stockouts by 35%.',
    challenge: 'A retail technology provider wanted to develop an AI-powered demand forecasting system to help retailers optimize inventory management. They had strong technical capabilities but lacked clarity on product prioritization, feature development sequence, and how to position the solution in a competitive market.',
    solution: [
      'Analyzed retail inventory management pain points and workflows',
      'Developed comprehensive product strategy with phased feature rollout',
      'Created scalable architecture supporting multi-tenant deployment',
      'Designed intuitive visualization and reporting interfaces',
      'Crafted go-to-market strategy focused on mid-market retailers'
    ],
    results: [
      '25% reduction in inventory carrying costs for retail clients',
      '35% decrease in stockout incidents',
      '18% improvement in overall inventory turnover',
      'Successful market entry with 15 retail chains adopting in first year',
      'Featured as "Innovative Solution of the Year" at major retail conference'
    ],
    image: '/images/retail-forecasting.jpg', 
  },
  {
    id: 'manufacturing-predictive',
    title: 'Manufacturing Predictive Maintenance',
    category: 'Manufacturing',
    description: 'Developed AI strategy and implementation roadmap for predictive maintenance in manufacturing, reducing downtime by 45% and maintenance costs by 30%.',
    challenge: 'A manufacturing equipment provider wanted to enhance their offerings with AI-powered predictive maintenance capabilities. They had accumulated vast amounts of sensor data but lacked the expertise to convert this into actionable maintenance insights and a marketable solution.',
    solution: [
      'Assessed existing sensor data quality and identified additional data collection needs',
      'Designed predictive models for different equipment failure modes',
      'Created intuitive dashboard for maintenance personnel with clear action recommendations',
      'Developed implementation roadmap for progressive rollout across equipment types',
      'Built pricing strategy and ROI models to support sales efforts'
    ],
    results: [
      '45% reduction in unplanned downtime for customer equipment',
      '30% decrease in overall maintenance costs',
      'Extended equipment lifespan by an average of 20%',
      'New recurring revenue stream for the client through subscription-based predictive maintenance service',
      'Product became a key differentiator in competitive bids, increasing win rate by 35%'
    ],
    image: '/images/manufacturing-predictive.jpg', 
  },
];

export default function UseCasesPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Explore how we've helped organizations transform their AI visions into market success.
              These real-world examples demonstrate our approach and the results we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases list */}
      <section className="py-16 md:py-24 bg-white dark:bg-secondary-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-24">
              {useCases.map((useCase, index) => (
                <div key={useCase.id} id={useCase.id} className="scroll-mt-24">
                  <div className="mb-12">
                    <span className="inline-block py-1 px-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm font-medium text-primary-700 dark:text-primary-400 mb-4">
                      {useCase.category}
                    </span>
                    <h2 className="text-3xl font-display font-bold mb-4 text-secondary-900 dark:text-secondary-50">
                      {useCase.title}
                    </h2>
                    <p className="text-xl text-secondary-600 dark:text-secondary-400">
                      {useCase.description}
                    </p>
                  </div>
                  
                  <div className="bg-secondary-50 dark:bg-secondary-900 rounded-xl p-8 mb-12">
                    <h3 className="text-xl font-display font-semibold mb-4 text-secondary-900 dark:text-secondary-50">
                      The Challenge
                    </h3>
                    <p className="text-secondary-700 dark:text-secondary-300">
                      {useCase.challenge}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-soft">
                      <h3 className="text-xl font-display font-semibold mb-6 text-secondary-900 dark:text-secondary-50">
                        Our Solution
                      </h3>
                      <ul className="space-y-4">
                        {useCase.solution.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-secondary-700 dark:text-secondary-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-soft">
                      <h3 className="text-xl font-display font-semibold mb-6 text-secondary-900 dark:text-secondary-50">
                        The Results
                      </h3>
                      <ul className="space-y-4">
                        {useCase.results.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-secondary-700 dark:text-secondary-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {index < useCases.length - 1 && (
                    <div className="border-b border-secondary-200 dark:border-secondary-800 w-1/2 mx-auto"></div>
                  )}
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
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help transform your AI vision into reality.
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