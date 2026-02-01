
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, CalendarDays, Trophy } from 'lucide-react'; 

interface ResearchItem {
  title: string;
  period: string; 
  description: string[];
  subtitle: string; 
}

const researchData: ResearchItem[] = [
  {
    title: 'Design and Development of Resistance Butt Welding Machine',
    subtitle: 'Undergraduate Final Year Project - University of Lahore',
    period: '2020',
    description: [
      'Introduced a simplified and economical butt welding machine design suitable for local bulk production, targeting cost-sensitive manufacturing environments.',
      'Conducted market research and literature review to assess existing technologies.',
      'Designed a high current transformer, validated through computer simulations including Finite Element Analysis, and developed a working prototype.',
      'Designed and developed the mechanical structure of the machine, including the mechanism for welding operation.',
      'Presented the work at a conference, handling manuscript writing, submission, revisions, and final presentation.'
    ],
  },
  {
    title: 'Design and Development of Solid-State DC Circuit Breaker',
    subtitle: 'Academic Research Project',
    period: '2022',
    description: [
      'Designed and developed a solid-state DC circuit breaker with low conduction loss, quick reclosing, and rebreaking capability to address control and stability challenges in DC power systems.',
      'Verified operating modes and performance through Simulink/MATLAB simulations.',
      'Designed the breaker to interrupt and clear faults within approximately 200 µs, significantly reducing potential damage compared to mechanical breakers.',
      'Incorporated a recharging mechanism for the commutation capacitor, enabling rebreaking capability absent in conventional DC circuit breakers.',
      'Improved system protection by enabling fast operation, allowing use of lower-specification components and minimizing electrical losses.',
      'Presented the work at a conference, handling manuscript writing, submission, revisions, and final presentation.'
    ],
  },
];

interface ResearchSectionProps {
  className?: string;
}

export default function ResearchSection({ className }: ResearchSectionProps) {
  return (
    <Section id="research" title="Research Experience" subtitle="" className={className}>
      <div className="space-y-8">
        {researchData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FlaskConical className="h-8 w-8 text-primary absolute top-6 right-6" />
            <CardHeader className="pr-16"> 
              <CardTitle className="text-2xl font-bold font-headline text-foreground">{item.title}</CardTitle>
              <CardDescription className="text-md text-primary font-medium">
                {item.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-muted-foreground text-sm mb-4 font-body">
                <CalendarDays className="h-4 w-4 mr-2 text-primary/80" />
                <span>{item.period}</span>
              </div>
              
              {item.description.length > 0 && (
                <>
                  <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3 mt-4 font-headline">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Key Achievements:
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((descItem, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                        <span className="font-body text-foreground/90 leading-relaxed">{descItem}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
