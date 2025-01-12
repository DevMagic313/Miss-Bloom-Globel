import React from 'react';
import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1ChSXQcruf/?mibextid=wwXIfr',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/miss_bloom_global/profilecard/?igsh=MW92bnV2Mm1pYTR4eg==',
      label: 'Instagram'
    },
    {
      icon: Youtube,
      href: 'https://youtu.be/Beta9d5LboM?si=OP6m04sE5WvZgS0l',
      label: 'YouTube'
    }
  ];

  return (
    <footer id="contact" className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:missbloomglobal@gmail.com" className="hover:text-purple-300">
              missbloomglobal@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
                title={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Miss Bloom Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}