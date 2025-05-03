
import { useState } from 'react';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import EventsList from '@/components/EventsList';
import { useEvents } from '@/hooks/useEvents';

const Index = () => {
  const { filteredEvents, updateFilters } = useEvents();
  
  const handleFilterChange = (filters: {
    search: string;
    college: string;
    eventType: string;
    startDate: string;
    endDate: string;
  }) => {
    updateFilters(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <FilterBar onFilterChange={handleFilterChange} />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <div className="text-sm text-muted-foreground">
            Showing {filteredEvents.length} events
          </div>
        </div>
        
        <EventsList events={filteredEvents} />
      </main>
      
      <footer className="bg-white border-t py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Campus Event Central. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
