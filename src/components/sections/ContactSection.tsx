
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    name: 'Email',
    icon: Mail,
    value: 'waleedabdullah.ee@gmail.com',
    href: 'mailto:waleedabdullah.ee@gmail.com',
    ariaLabel: 'Send an Email',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    value: 'linkedin.com/in/waleedabdullah',
    href: 'https://linkedin.com/in/waleedabdullah/',
    ariaLabel: 'View LinkedIn Profile',
  },
  {
    name: 'GitHub',
    icon: Github,
    value: 'github.com/waleedx1',
    href: 'https://github.com/waleedx1',
    ariaLabel: 'View GitHub Profile',
  },
];

export default function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's Connect and Discuss Opportunities">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => (
          <Card 
            key={method.name} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
            <CardHeader className="items-center text-center p-6 pb-2">
              <div className="p-3.5 bg-primary/10 rounded-full mb-3">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold font-headline text-card-foreground">{method.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0">
              <p className="text-muted-foreground mb-4 break-words font-body">{method.value}</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm rounded-full shadow-lg transition-all duration-300 group">
                <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={method.ariaLabel}>
                  {method.name === 'Email' ? 'Send Email' : `View ${method.name}`}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 md:mt-16 text-center animate-fade-in" style={{ animationDelay: `${contactMethods.length * 0.1}s` }}>
        <p className="text-lg text-muted-foreground font-body">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>
    </Section>
  );
}
