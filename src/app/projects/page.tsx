
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects - ElectronFlow',
  description: 'Explore a collection of electrical engineering projects by W. Abdullah of ElectronFlow.',
};

export default function ProjectsPage() {
  const gradientBackground = "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-900 dark:to-sky-950/60";
  return (
    <Section className={`py-16 md:py-20 ${gradientBackground}`}>
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          All Projects
        </h2>
        <div className="mt-6 w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="mb-8">
        <Button 
          asChild 
          variant="outline" 
          className="group rounded-full text-foreground hover:bg-muted hover:text-muted-foreground focus-visible:ring-primary/70"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
      </div>

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg font-body">No projects to display at the moment. Check back soon!</p>
      )}
    </Section>
  );
}
