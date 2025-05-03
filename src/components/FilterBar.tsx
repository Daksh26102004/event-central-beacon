
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { colleges, eventTypes } from "@/lib/mockData";
import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface FilterBarProps {
  onFilterChange: (filters: {
    search: string;
    college: string;
    eventType: string;
    startDate: string;
    endDate: string;
  }) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [search, setSearch] = useState("");
  const [college, setCollege] = useState("All Colleges");
  const [eventType, setEventType] = useState("All Types");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    onFilterChange({
      search,
      college,
      eventType,
      startDate,
      endDate
    });
  }, [search, college, eventType, startDate, endDate, onFilterChange]);

  const handleClearFilters = () => {
    setSearch("");
    setCollege("All Colleges");
    setEventType("All Types");
    setStartDate("");
    setEndDate("");
    setIsFiltersOpen(false);
  };

  return (
    <div className="bg-white py-4 mb-6 sticky top-[73px] z-[5] border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              className="pl-9"
            />
          </div>
          
          {isMobile ? (
            <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter size={16} />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile-college">College</Label>
                    <Select value={college} onValueChange={setCollege}>
                      <SelectTrigger id="mobile-college">
                        <SelectValue placeholder="All Colleges" />
                      </SelectTrigger>
                      <SelectContent>
                        {colleges.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile-event-type">Event Type</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger id="mobile-event-type">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type === 'All Types' ? type : type.charAt(0).toUpperCase() + type.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile-start-date">Start Date</Label>
                    <Input
                      id="mobile-start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile-end-date">End Date</Label>
                    <Input
                      id="mobile-end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleClearFilters}
                    className="w-full"
                  >
                    Clear All
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              {/* Desktop filters */}
              <div className="flex gap-3 items-center">
                <Select value={college} onValueChange={setCollege}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Colleges" />
                  </SelectTrigger>
                  <SelectContent>
                    {colleges.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === 'All Types' ? type : type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Date Range</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-4 space-y-3">
                    <h4 className="font-medium">Select Date Range</h4>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-2">
                        <Label htmlFor="start-date">From</Label>
                        <Input
                          id="start-date"
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="col-span-2"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-2">
                        <Label htmlFor="end-date">To</Label>
                        <Input
                          id="end-date"
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="col-span-2"
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                {(search || college !== "All Colleges" || eventType !== "All Types" || startDate || endDate) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleClearFilters}
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
