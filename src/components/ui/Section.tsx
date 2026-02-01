import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  hasBottomBorder?: boolean;
  showDivider?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  hasBottomBorder = false,
  showDivider = true, // Default to true for sections with titles
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20", // Updated vertical padding
        hasBottomBorder && "border-b",
        className
      )}
    >
      <div className={cn("container max-w-6xl", contentClassName)}> {/* Updated container style */}
        {title && (
          <div className="mb-12 md:mb-16 text-center"> {/* Updated title margin */}
            <h2 className={cn("text-4xl md:text-5xl font-bold tracking-tight font-headline", titleClassName)}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn("mt-3 text-lg md:text-xl text-muted-foreground", subtitleClassName)}> {/* Updated subtitle style */}
                {subtitle}
              </p>
            )}
            {showDivider && <div className="mt-6 w-24 h-1 bg-primary mx-auto"></div>} {/* Accent Divider */}
          </div>
        )}
        <div> {/* Removed cn(contentClassName) from here, applied to container */}
          {children}
        </div>
      </div>
    </section>
  );
}
