
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import CourseworkSection from '@/components/sections/CourseworkSection';
import ResearchSection from '@/components/sections/ResearchSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import LeadershipExperienceSection from '@/components/sections/LeadershipExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import LifePhilosophySection from '@/components/sections/LifePhilosophySection';

const gradientBackground = "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-900 dark:to-sky-950/60";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection className={gradientBackground} />
      <EducationSection />
      <CourseworkSection className={gradientBackground} />
      <ResearchSection />
      <PublicationsSection className={gradientBackground} />
      <ExperienceSection />
      <LeadershipExperienceSection className={gradientBackground} />
      <ProjectsSection />
      <AwardsSection className={gradientBackground} />
      <HobbiesSection />
      <LifePhilosophySection className={gradientBackground} />
    </>
  );
}
