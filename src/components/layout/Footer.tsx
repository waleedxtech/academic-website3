
import Link from 'next/link';
import { Mail, Linkedin, Github, GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    name: 'Email',
    icon: Mail,
    value: 'waleedabdullah.ee@gmail.com',
    href: 'mailto:waleedabdullah.ee@gmail.com',
    ariaLabel: 'Email Waleed Abdullah at waleedabdullah.ee@gmail.com',
  },
  {
    name: 'Location',
    icon: MapPin,
    value: 'Lahore, Pakistan',
    ariaLabel: "Waleed Abdullah's Location: Lahore, Pakistan",
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    value: 'linkedin.com/in/waleedabdullah',
    href: 'https://www.linkedin.com/in/waleedabdullah/',
    ariaLabel: 'View Waleed Abdullah\'s LinkedIn Profile',
    buttonText: 'LinkedIn',
  },
  {
    name: 'GitHub',
    icon: Github,
    value: 'github.com/waleedx1',
    href: 'https://github.com/waleedx1',
    ariaLabel: 'View Waleed Abdullah\'s GitHub Profile',
    buttonText: 'GitHub',
  },
  {
    name: 'Google Scholar',
    icon: GraduationCap,
    value: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=Ald38KsAAAAJ',
    ariaLabel: 'View Waleed Abdullah\'s Google Scholar Profile',
    buttonText: 'Google Scholar',
  },
];

export default function Footer() {
  const emailAndLocation = contactMethods.filter(m => m.name === 'Email' || m.name === 'Location');
  const socialLinks = contactMethods.filter(m => m.name !== 'Email' && m.name !== 'Location');

  return (
    <footer className="bg-gradient-to-tr from-primary to-accent text-white py-12 md:py-16">
      <div className="container max-w-6xl mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold font-headline mb-2 text-white">Let's connect</h3>
          <p className="font-body text-white">
            Feel free to reach out for collaborations or inquiries.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {emailAndLocation.map((method) => (
              <div
                key={method.name}
                className="flex items-center gap-2 text-white font-body text-sm"
                aria-label={method.ariaLabel}
              >
                <method.icon className="h-5 w-5 text-white" />
                {method.href && method.name === 'Email' ? (
                  <Link href={method.href} className="hover:underline text-white">
                    {method.value}
                  </Link>
                ) : (
                  <span className="text-white">{method.value}</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {socialLinks.map((method) => (
              <Button
                key={method.name}
                asChild={!!method.href}
                variant="outline"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/30 hover:border-white/50 rounded-full px-6 py-3 group transition-all duration-300 hover:scale-105 text-sm"
                aria-label={method.ariaLabel}
              >
                {method.href ? (
                  <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <method.icon className="mr-2 h-5 w-5" />
                    {method.buttonText || method.name}
                  </Link>
                ) : (
                   <>
                    <method.icon className="mr-2 h-5 w-5" />
                    {method.buttonText || method.value}
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
             <span className="font-semibold font-headline text-white">Waleed Abdullah</span>
          </div>
          <p className="text-sm text-white font-body">
            &copy; {new Date().getFullYear()} Waleed Abdullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
