import Section from '@/components/ui/Section';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface HighlightItem {
  value: string;
  label: string;
  gradient: string;
  textClass: string;
  darkGradient: string;
  darkTextClass: string;
}

const highlightData: HighlightItem[] = [
  {
    value: "1st",
    label: "Class Rank",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    textClass: "text-blue-600",
    darkGradient: "dark:from-blue-900/80 dark:to-blue-950/80",
    darkTextClass: "dark:text-blue-400",
  },
  {
    value: "3.91",
    label: "GPA/4.00",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    textClass: "text-green-600",
    darkGradient: "dark:from-green-900/80 dark:to-green-950/80",
    darkTextClass: "dark:text-green-400",
  },
  {
    value: "2",
    label: "Publications",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    textClass: "text-purple-600",
    darkGradient: "dark:from-purple-900/80 dark:to-purple-950/80",
    darkTextClass: "dark:text-purple-400",
  },
];

const aboutImages = [
  {
    src: "https://res.cloudinary.com/dcajabot9/image/upload/w_0.25,c_scale/v1750581915/Gold_Medal_1_square_dstekz.jpg",
    highResSrc: "https://res.cloudinary.com/dcajabot9/image/upload/v1750581915/Gold_Medal_1_square_dstekz.jpg",
    alt: "Receiving gold medal at convocation",
    hint: "award ceremony",
  },
  {
    src: "https://res.cloudinary.com/dcajabot9/image/upload/w_0.25,c_scale/v1750581916/Gold_Medal_2_square_gcg2ja.jpg",
    highResSrc: "https://res.cloudinary.com/dcajabot9/image/upload/v1750581916/Gold_Medal_2_square_gcg2ja.jpg",
    alt: "Waleed Abdullah with gold medal",
    hint: "gold medal",
  },
];

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Driven by Curiosity and a Passion for Innovation"
      className={className}
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left Column: Text */}
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            I am a Gold Medalist Electrical Engineer with a strong academic
            background, complemented by professional and research
            experience. I graduated first out of 200+ students with a GPA of
            3.91/4.00 from the University of Lahore.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            I am highly motivated and driven by curiosity, bringing passion for
            solving complex problems along with energy, enthusiasm,
            innovative thinking, and a mindset of continuous improvement. I
            am a registered engineer with PEC under the Washington Accord.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            Beyond engineering, I manage a YouTube channel with 38K+
            subscribers and am passionate about emerging technologies like
            Agentic AI, Smart Grids, and Grid-Forming Inverters, along with
            sustainability, entrepreneurship, and personal development.
          </p>
        </div>

        {/* Right Column: Highlight Blocks & Images */}
        <div className="space-y-8">
          <div className="flex justify-center gap-4 sm:gap-6">
            {highlightData.map((item, index) => (
              <div
                key={index}
                className={`${item.gradient} ${item.darkGradient} rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-1 flex-col justify-center items-center p-2 text-center aspect-square max-w-28`}
              >
                <div className={`text-xl sm:text-2xl font-bold ${item.textClass} ${item.darkTextClass}`}>
                  {item.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-xs leading-tight mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {aboutImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.hint}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-none w-auto h-auto p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                  <img
                    src={image.highResSrc}
                    alt={image.alt}
                    className="object-contain h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg"
                    unoptimized
                  />
                  <DialogClose className="absolute right-4 top-4 rounded-full p-2 bg-black/50 text-white opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
