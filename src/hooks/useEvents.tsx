
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Event, mockEvents } from '@/lib/mockData';

interface EventsContextType {
  events: Event[];
  addEvent: (event: Omit<Event, 'id'> & { id?: string }) => void;
  filteredEvents: Event[];
  updateFilters: (filters: {
    search: string;
    college: string;
    eventType: string;
    startDate: string;
    endDate: string;
  }) => void;
  activeFilters: {
    search: string;
    college: string;
    eventType: string;
    startDate: string;
    endDate: string;
  };
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  const [activeFilters, setActiveFilters] = useState({
    search: '',
    college: 'All Colleges',
    eventType: 'All Types',
    startDate: '',
    endDate: '',
  });

  // Add a new event
  const addEvent = (event: Omit<Event, 'id'> & { id?: string }) => {
    const newEvent = {
      ...event,
      id: event.id || `new-${Date.now()}`,
    } as Event;
    
    setEvents((prevEvents) => [newEvent, ...prevEvents]);
  };

  // Update filters and filtered events
  const updateFilters = (filters: {
    search: string;
    college: string;
    eventType: string;
    startDate: string;
    endDate: string;
  }) => {
    setActiveFilters(filters);
  };

  // Apply filters whenever activeFilters or events change
  useEffect(() => {
    let result = [...events];
    
    // Filter by search term
    if (activeFilters.search) {
      const searchTerm = activeFilters.search.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm) ||
          event.college.toLowerCase().includes(searchTerm) ||
          event.location.toLowerCase().includes(searchTerm) ||
          (event.organizer && event.organizer.toLowerCase().includes(searchTerm))
      );
    }
    
    // Filter by college
    if (activeFilters.college !== 'All Colleges') {
      result = result.filter((event) => event.college === activeFilters.college);
    }
    
    // Filter by event type
    if (activeFilters.eventType !== 'All Types') {
      result = result.filter((event) => event.type === activeFilters.eventType);
    }
    
    // Filter by start date
    if (activeFilters.startDate) {
      result = result.filter(
        (event) => new Date(event.date) >= new Date(activeFilters.startDate)
      );
    }
    
    // Filter by end date
    if (activeFilters.endDate) {
      result = result.filter(
        (event) => new Date(event.date) <= new Date(activeFilters.endDate)
      );
    }
    
    // Sort events by date (upcoming first)
    result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    setFilteredEvents(result);
  }, [activeFilters, events]);

  return (
    <EventsContext.Provider
      value={{
        events,
        addEvent,
        filteredEvents,
        updateFilters,
        activeFilters,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventsProvider');
  }
  return context;
};
