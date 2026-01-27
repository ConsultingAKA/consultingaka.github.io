import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | AKA Consulting',
  description: 'Meet our team of expert consultants specializing in AI product management, software architecture, and market development.',
};

const consultants = [
  {
    id: 'alex-martinez',
    name: 'Kenneth Cather',
    role: 'Principal Consultant, AI Product Strategy',
    bio: 'Kenneth brings over 15 years of experience in product management and strategy with the past decade focused on AI-driven solutions. Previously, he led product teams at major tech companies, bringing multiple AI products from concept to market success. He also lead the creation of the first no-code AI solution with UIPath Studio. Kennneth has also lead product strategy for two companies that have gone from Series A to IPO.',
    expertise: ['AI Product Strategy', 'Go-To-Market Planning', 'Product Management', 'Technical Roadmapping', 'No-Code Solutions', 'AI Software Architecture'],
    education: 'BS in Electrical Engineering, University of Cincinnati',
    image: '/images/kenneth-cather.jpg', // Replace with actual image when available
  },
  {
    id: 'kai-johnson',
    name: 'Mari Garcia',
    role: 'Senior Consultant, Product Designer',
    bio: 'Mari is an experienced product designer with deep expertise in designing products for AI workloads. She has led design for multiple Fortune 500 companies and startups, with a focus on intuitive UI for quick adoption.',
    expertise: ['User Research', 'User Experience', 'Design Thinking', 'User Interface'],
    education: 'MA in Management and Leadership, CUNY | BA in International Business, CUNY',
    image: '/images/mari-garcia.jpg', // Replace with actual image when available
  },
 /* {
    id: 'sarah-patel',
    name: 'Sarah Patel',
    role: 'Principal Consultant, Market Development',
    bio: 'Sarah specializes in market development strategies for AI products. With a background in both marketing and data science, she has helped numerous companies position and launch AI solutions successfully in competitive markets.',
    expertise: ['Market Analysis', 'Competitive Positioning', 'Customer Acquisition', 'Growth Strategy'],
    education: 'MBA, Harvard Business School | MS in Data Science, University of Washington',
    image: '/images/sarah-patel.jpg', // Replace with actual image when available
  },
  {
    id: 'michael-wong',
    name: 'Michael Wong',
    role: 'Senior Consultant, AI Implementation',
    bio: 'Michael is an AI implementation specialist with extensive experience in translating AI research into production-ready systems. He has successfully led numerous AI initiatives across healthcare, finance, and retail sectors.',
    expertise: ['AI Implementation', 'ML Ops', 'Model Governance', 'Performance Optimization'],
    education: 'MS in Machine Learning, Carnegie Mellon | BS in Statistics, UCLA',
    image: '/images/michael-wong.jpg', // Replace with actual image when available
  },*/
];

export default function ConsultantsPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Meet Our Team</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Our team of expert consultants brings decades of combined experience in AI product management, 
              software architecture, and market development to help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Team members section */}
      <section className="py-16 md:py-24 bg-white dark:bg-secondary-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {consultants.map((consultant) => (
                <div key={consultant.id} id={consultant.id} className="scroll-mt-24">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="aspect-square rounded-xl bg-secondary-200 dark:bg-secondary-800 overflow-hidden">
                        <Image
                          src={consultant.image}
                          alt={consultant.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-display font-bold mb-1 text-secondary-900 dark:text-secondary-50">
                        {consultant.name}
                      </h2>
                      <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                        {consultant.role}
                      </p>
                      <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                        {consultant.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                          Areas of Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {consultant.expertise.map((skill, index) => (
                            <span 
                              key={index}
                              className="inline-block px-3 py-1 bg-secondary-100 dark:bg-secondary-800 rounded-full text-sm text-secondary-800 dark:text-secondary-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        <span className="font-medium">Education:</span> {consultant.education}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collective expertise section */}
      <section className="py-16 md:py-20 bg-secondary-50 dark:bg-secondary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Our Collective Expertise</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Our team combines diverse backgrounds and expertise to deliver comprehensive solutions for your AI initiatives.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-secondary-900 dark:text-secondary-50">
                Industry Experience
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                Our team has worked across healthcare, finance, retail, manufacturing, and technology sectors, bringing domain-specific AI expertise.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-secondary-900 dark:text-secondary-50">
                Technical Depth
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                From fundamental AI research to production-grade implementations, we understand the technical challenges at every stage of AI development.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-secondary-900 dark:text-secondary-50">
                Business Acumen
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                We bridge the gap between technology and business value, ensuring AI initiatives deliver measurable return on investment.
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
              Work With Our Expert Team
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our consultants are ready to help transform your AI initiatives into market success.
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