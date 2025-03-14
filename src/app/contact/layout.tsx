import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AKA Consulting',
  description: 'Get in touch with AKA Consulting for expert guidance on AI product management, software architecture, and market development.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}