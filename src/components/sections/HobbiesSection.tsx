
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, Cpu, Leaf, UserCheck, HeartPulse, Briefcase, DollarSign, Mountain, Users as NetworkingIcon, Lightbulb } from 'lucide-react';

interface Hobby {
  name: string;
  icon: React.ElementType;
}

const hobbiesData: Hobby[] = [
  { name: "Own a YouTube channel with 38K+ subscribers", icon: Youtube },
  { name: "Exploring emerging technologies (Agentic AI, LLMs, Blockchain, Smart Grids, IBRs, Grid-Forming Inverters)", icon: Lightbulb },
  { name: "Sustainability and green technologies", icon: Leaf },
  { name: "Engaging in personal development and continuous learning", icon: UserCheck },
  { name: "Maintaining an active lifestyle through fitness", icon: HeartPulse },
  { name: "Exploring innovative business ideas and entrepreneurship", icon: Briefcase },
  { name: "Financial literacy", icon: DollarSign },
  { name: "Enjoying outdoor exploration and discovering new places", icon: Mountain },
  { name: "Building connections through professional networking", icon: NetworkingIcon }
];

interface HobbiesSectionProps {
  className?: string;
}

export default function HobbiesSection({ className }: HobbiesSectionProps) {
  return (
    <Section id="hobbies" title="Hobbies & Interests" className={className}>
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg">
        <CardContent className="p-6 md:p-8">
          <ul className="space-y-4">
            {hobbiesData.map((hobby, index) => (
              <li 
                key={index} 
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <hobby.icon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground/90 font-body">{hobby.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}

