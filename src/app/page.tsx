import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import FeaturedUseCases from '@/components/home/FeaturedUseCases';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AKA Consulting | AI Product Management & Software Architecture',
  description: 'Expert consulting in AI product management, software architecture, and market development. Tailored solutions for your business growth.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <FeaturedUseCases />
      <Testimonials />
      <CTASection />
    </div>
  );
}