
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays, MapPin, Trophy } from 'lucide-react';

interface LeadershipExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  keyAchievements: string[];
}

const leadershipExperienceData: LeadershipExperienceItem[] = [
  {
    role: 'General Secretary',
    organization: 'Electrical and Control Engineering Society, University of Lahore',
    location: 'Lahore, Pakistan',
    period: 'Sep 2019 – Mar 2020',
    description: 'Led society operations, organized technical workshops, and coordinated student training initiatives.',
    keyAchievements: [
      'Successfully managed society operations and events',
      'Organized technical workshops for students',
      'Coordinated training initiatives and professional development programs',
    ],
  },
];

interface LeadershipExperienceSectionProps {
  className?: string;
}

export default function LeadershipExperienceSection({ className }: LeadershipExperienceSectionProps) {
  if (!leadershipExperienceData || leadershipExperienceData.length === 0) {
    return null;
  }

  return (
    <Section id="leadership-experience" title="Leadership Experience" subtitle="" className={className}>
      <div className="space-y-8">
        {leadershipExperienceData.map((item, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Briefcase className="h-8 w-8 text-primary absolute top-6 right-6" />
            <CardHeader className="pr-16">
              <CardTitle className="text-2xl font-bold font-headline text-foreground">{item.role}</CardTitle>
              <CardDescription className="text-md text-primary font-medium">
                {item.organization}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-4 font-body gap-x-4 gap-y-1">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1.5 text-primary/80" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1.5 text-primary/80" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="font-body text-foreground/90 leading-relaxed mb-4">{item.description}</p>
              
              {item.keyAchievements && item.keyAchievements.length > 0 && (
                <>
                  <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3 mt-4 font-headline">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Key Achievements:
                  </div>
                  <ul className="space-y-2">
                    {item.keyAchievements.map((descItem, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
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
