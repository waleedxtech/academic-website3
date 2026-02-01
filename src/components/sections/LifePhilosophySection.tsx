
import Section from '@/components/ui/Section';

interface LifePhilosophySectionProps {
  className?: string;
}

export default function LifePhilosophySection({ className }: LifePhilosophySectionProps) {
  return (
    <Section
      id="life-philosophy"
      title="Life Philosophy"
      className={className}
      showDivider={false} // Ensures no divider line under the title
      titleClassName="text-center" // Ensures the H2 title text is centered
      // Removed contentClassName from here
    >
      <div className="flex justify-center"> {/* New wrapper to center the content block */}
        <div className="max-w-3xl text-center bg-background/80 dark:bg-card/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-border/30">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-body">
            Driven by curiosity and guided by ethics, I strive to innovate with integrity. I believe in uplifting others, fostering sustainable progress, and using service to give back to humanity. Every challenge is an opportunity to grow, not just personally, but collectively. My mission is impact rooted in honesty and purpose.
          </p>
        </div>
      </div>
    </Section>
  );
}
