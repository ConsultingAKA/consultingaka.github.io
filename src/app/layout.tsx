import '@/styles/globals.css';
import '@/styles/basic.css'; // Add this new import
import { Inter, Raleway } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'AKA Consulting | AI Product Management & Software Architecture',
  description: 'Expert consulting in AI product management, software architecture, and market development. Tailored solutions for your business growth.',
  keywords: ['AI consulting', 'product management', 'software architecture', 'market development', 'AI solutions'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <head>
        
      </head>
      <body className="min-h-screen flex flex-col">
        <ClientCssLoader />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}