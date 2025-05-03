
import { useState } from 'react';
import EventCard from './EventCard';
import { Event } from '@/lib/mockData';

interface EventsListProps {
  events: Event[];
}

const EventsList = ({ events }: EventsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <div className="col-span-full text-center py-10 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-semibold text-muted-foreground">No events match your filters</h3>
          <p className="mt-2 text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default EventsList;
