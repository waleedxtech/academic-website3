
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, ExternalLink, Award, FileText, CalendarDays, Trophy } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CredentialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
  credentials: CredentialLink[];
}

const educationEntries: EducationEntry[] = [
  {
    degree: "B.Sc., Electrical Engineering",
    institution: "University of Lahore",
    period: "Sep. 2016 – Jun. 2020",
    highlights: [
      "1st out of 200+ students",
      "GPA: 3.91/4.00",
      "Gold Medal for Highest Distinction",
    ],
    credentials: [
      {
        label: "WES Verified Credential",
        href: "https://badges.wes.org/Evidence?i=42a85685-e6a4-4bdf-8c06-e65acc8543c2&type=us",
        icon: ExternalLink,
      },
      {
        label: "PEC Registered (ELECT/86064)",
        href: "https://verification.pec.org.pk/v/eV/sED/i.aspx?eid=322F303836303634",
        icon: ExternalLink,
      },
    ],
  },
];

interface CertificationInfo {
  title: string;
  details?: string;
  href?: string;
  icon: React.ElementType;
}

const certificationsAndTrainingData: CertificationInfo[] = [
  {
    title: "Advanced Power System Protection",
    details: "iMentors (April 2025)",
    icon: FileText,
  },
  {
    title: "Substation Design using DIgSILENT PowerFactory",
    details: "iMentors (May 2025)",
    icon: FileText,
  },
  {
    title: "The Complete Electrical Power with ETAP & Manual Analysis",
    details: "Udemy (Ongoing)",
    icon: FileText,
  },
];

interface EducationSectionProps {
  className?: string;
}

export default function EducationSection({ className }: EducationSectionProps) {
  return (
    <Section id="education" showDivider={true} title="Education & Certifications" className={className}>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Column: Education */}
        <div>
          <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2 text-foreground">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          {educationEntries.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <GraduationCap className="h-7 w-7 text-primary absolute top-6 right-6" />
              <CardHeader className="p-0 mb-3 pr-10">
                <CardTitle className="text-xl font-bold font-headline text-foreground">{edu.degree}</CardTitle>
                <p className="text-primary font-medium font-body">{edu.institution}</p>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center text-sm text-muted-foreground font-body">
                  <CalendarDays className="h-4 w-4 mr-2 text-primary/80" />
                  <span>{edu.period}</span>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-md font-semibold text-foreground mb-2 mt-1 font-headline">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Key Highlights:
                  </div>
                  <ul className="space-y-1.5 pl-1">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                        <span className="font-body text-foreground/90 text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {edu.credentials && edu.credentials.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-md font-semibold text-foreground mb-2 font-headline">Credentials:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.credentials.map((cred, credIndex) => (
                        <Button
                          key={credIndex}
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-primary/30 hover:border-primary/50 px-4 py-1.5 text-xs h-auto group"
                        >
                          <Link href={cred.href} target="_blank" rel="noopener noreferrer">
                            {cred.label}
                            <cred.icon className="ml-1.5 h-3.5 w-3.5 group-hover:scale-105 transition-transform" />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Column: Certifications & Training */}
        <div>
          <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2 text-foreground">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Training
          </h3>
          <div className="space-y-4">
            {certificationsAndTrainingData.map((cert, index) => (
              <div
                key={index}
                className="bg-emerald-100 dark:bg-emerald-900/50 rounded-lg p-4 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow duration-300"
              >
                <cert.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground/90 font-body">
                    {cert.href ? (
                      <Link href={cert.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">
                        {cert.title}
                      </Link>
                    ) : (
                      cert.title
                    )}
                  </h4>
                  {cert.details && <p className="text-sm text-muted-foreground font-body">{cert.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
