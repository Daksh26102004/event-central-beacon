
import { Event } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from "lucide-react";
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const formattedDate = format(new Date(event.date), 'MMM dd, yyyy');
  
  const badgeVariant = event.type === 'hackathon' 
    ? 'default' 
    : event.type === 'techtalk' 
    ? 'secondary' 
    : 'outline';

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg border-t-4 hover:-translate-y-1" 
          style={{ borderTopColor: 
            event.type === 'hackathon' 
              ? '#3B82F6' 
              : event.type === 'techtalk' 
              ? '#10B981' 
              : '#F59E0B' 
          }}>
      {event.imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant={badgeVariant} className="capitalize">
            {event.type}
          </Badge>
          <span className="text-sm text-muted-foreground">{event.college}</span>
        </div>
        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm">
          <Calendar size={14} />
          {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-1">
        <div className="text-xs text-muted-foreground">{event.location}</div>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-primary hover:underline"
        >
          Event Details →
        </a>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
