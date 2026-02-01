
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircuitBoard, Cpu, Code, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Software",
    icon: Code,
    skills: ["MATLAB", "Simulink", "ETAP", "DigSilent PowerFactory", "ANSYS Maxwell", "CST Studio", "AutoCAD", "Multisim", "Proteus"],
  },
  {
    category: "Technical Skills",
    icon: CircuitBoard,
    skills: ["Power System Studies", "System Design", "Finite Element Analysis", "PCB Design and Fabrication", "Hardware Prototyping"],
  },
  {
    category: "Programming",
    icon: Cpu,
    skills: ["Python", "C++", "MATLAB", "Embedded Systems", "Arduino"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Self-Motivation", "Problem Solving", "Critical Thinking", "Creativity", "Attention to Detail"],
  },
  {
    category: "Actively Enhancing",
    icon: TrendingUp,
    skills: ["Machine Learning", "Optimization", "PSCAD", "Power System Studies"],
  }
];

interface SkillsSectionProps {
  className?: string;
}

export default function SkillsSection({ className }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Technical Skills & Abilities" subtitle="" className={className}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillCategory, index) => (
          <Card 
            key={skillCategory.category} 
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center space-x-3 p-6">
              <skillCategory.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-xl font-bold font-headline text-card-foreground">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <ul className="space-y-2 text-left">
                {skillCategory.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="flex items-start gap-2.5 text-card-foreground font-body text-sm"
                  >
                    <div className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
