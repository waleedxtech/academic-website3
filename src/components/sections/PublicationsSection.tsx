
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { FileText, Users, LibraryBig, CalendarDays } from 'lucide-react'; 

interface PublicationItem {
  title: string;
  authors: string;
  conferenceName: string;
  conferenceLink?: string;
  location: string;
  year: string;
  description: string;
  keywords: string[];
}

const publicationData: PublicationItem[] = [
  {
    title: 'Design and Development of Improved Micro Butt Welding Power Plant',
    authors: 'W. Abdullah, M. Barkat, M. Ijaz, R. Khan, R. Muzammel and A. Raza',
    conferenceName: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST)',
    // conferenceLink: 'https://example.com/iceest2022', 
    location: 'Lahore, Pakistan',
    year: '2022',
    description: 'Presented an innovative design for economical butt welding machines suitable for local manufacturing environments.',
    keywords: ['Welding Technology', 'Power Electronics', 'Manufacturing', 'Cost Optimization'],
  },
  {
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    authors: 'U. Tahir, W. Abdullah and L. Ali',
    conferenceName: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST)',
    // conferenceLink: 'https://example.com/iceest2022', 
    location: 'Lahore, Pakistan',
    year: '2022',
    description: 'Proposed a solid-state DC circuit breaker with low conduction loss, quick reclosing, and rebreaking capability to address control and stability challenges in DC power systems.',
    keywords: ['Solid-State Breaker', 'DC Power Systems', 'Fault Interruption', 'Power Electronics', 'Simulink'],
  },
];

interface PublicationsSectionProps {
  className?: string;
}

export default function PublicationsSection({ className }: PublicationsSectionProps) {
  return (
    <Section id="publications" title="Publications" className={className}>
      <div className="space-y-8">
        {publicationData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FileText className="h-8 w-8 text-primary absolute top-6 right-6 opacity-80 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pr-16 pb-4">
              <CardTitle className="text-xl md:text-2xl font-bold font-headline text-foreground">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span>{item.authors}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <LibraryBig className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                {item.conferenceLink ? (
                  <Link href={item.conferenceLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {item.conferenceName}
                  </Link>
                ) : (
                  <span className="text-primary">{item.conferenceName}</span>
                )}
              </div>
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <CalendarDays className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span>{item.location}, {item.year}</span>
              </div>
              
              <p className="text-foreground/90 font-body pt-2 leading-relaxed">
                {item.description}
              </p>

              {item.keywords && item.keywords.length > 0 && (
                <div className="pt-3">
                  <h4 className="text-sm font-semibold text-foreground mb-2 font-headline">Keywords:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="outline"
                        className="bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 py-1 text-xs rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
