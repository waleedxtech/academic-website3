
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react'; 

const courseworkData = [
  "Power Distribution and Utilization",
  "Power System Protection",
  "Power System Analysis",
  "Power Electronics",
  "Electrical Power Transmission",
  "Control Systems",
  "Control of DC and AC Drives",
  "Embedded Systems"
];

interface CourseworkSectionProps {
  className?: string;
}
const SHOW_COURSEWORK = false; // change to true to enable

export default function CourseworkSection({ className }: CourseworkSectionProps) {
  if (!SHOW_COURSEWORK) return null;

  return (
    <Section id="coursework" title="Relevant Coursework" subtitle="" className={className}>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {courseworkData.map((course, index) => (
          <div
            key={course}
            className="flex items-center gap-3 rounded-lg border bg-card px-4 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary group hover:scale-[1.03] cursor-default animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <BookOpen className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors flex-shrink-0" />
            <span className="text-card-foreground font-body text-sm md:text-base">{course}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
