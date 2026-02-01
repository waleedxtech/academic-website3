import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, Trophy } from 'lucide-react'; 

// Updated interface to accommodate full-time work
interface ExperienceItem {
  type: string;
  title: string;
  organization: string; 
  period: string; 
  location: string;
  description: string | string[];
}

const experienceData: ExperienceItem[] = [
  {
    type: 'Full-time',
    title: 'Electrical Engineer',
    organization: 'Firestone Engineering Technologies',
    period: 'Jul. 2020 – Present',
    location: 'Lahore, Pakistan',
    description: 'Design and installation of electrical systems for fire safety equipment in commercial and industrial facilities.',
  },
  {
    type: 'Internship',
    title: 'Internship – LESCO, 132kV Substation',
    organization: 'LESCO (Lahore Electric Supply Company)',
    period: 'Jun. 2019 – Jul. 2019',
    location: 'New Garden Town, Lahore',
    description: 'Expanded prior knowledge through in-depth exposure to substation protection systems, including relay coordination and fault isolation strategies; observed execution of shutdown procedures and real-time maintenance operations.',
  },
  {
    type: 'Internship',
    title: 'Internship – NTDC, 220kV Substation',
    organization: 'NTDC (National Transmission & Despatch Company)',
    period: 'Jun. 2018 – Sep. 2018',
    location: 'New Kot Lakhpat, Lahore',
    description: 'Gained foundational exposure to high-voltage power transmission systems, including transformers, circuit breakers, and busbars, with hands-on observation of real-time grid operations and maintenance practices.',
  },
];

interface ExperienceSectionProps {
  className?: string;
}

export default function ExperienceSection({ className }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Work Experience" subtitle="" className={className}>
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Briefcase className="h-8 w-8 text-primary absolute top-6 right-6" />
            <CardHeader className="pr-16">
              <CardTitle className="text-2xl font-bold font-headline text-foreground">{item.title}</CardTitle>
              <CardDescription className="text-md text-primary font-medium">
                {item.organization} - <span className="italic text-primary/80">{item.location}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-muted-foreground text-sm mb-4 font-body">
                <CalendarDays className="h-4 w-4 mr-2 text-primary/80" />
                <span>{item.period}</span>
              </div>
              
              {item.description && (
                <>
                  <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3 mt-4 font-headline">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Key Responsibilities:
                  </div>
                  {Array.isArray(item.description) ? (
                    <ul className="space-y-2">
                      {item.description.map((descItem, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                          <span className="font-body text-foreground/90 leading-relaxed">{descItem}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-body text-foreground/90 leading-relaxed">{item.description}</p>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
