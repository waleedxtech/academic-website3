
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProjects = projects.slice(0, 3);

interface ProjectsSectionProps {
  className?: string;
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Featured Projects" subtitle="" className={className}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            />
        ))}
      </div>
      {projects.length > 3 && (
        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: `${featuredProjects.length * 0.1}s` }}>
          <Button 
            asChild 
            size="lg" 
            className="bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 px-8 py-3 rounded-full shadow-lg transition-all duration-300 group"
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      )}
       {projects.length === 0 && (
        <p className="text-center text-muted-foreground text-lg">More projects coming soon!</p>
      )}
    </Section>
  );
}
