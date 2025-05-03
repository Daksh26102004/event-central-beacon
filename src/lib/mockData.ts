
export type EventType = "hackathon" | "techtalk" | "workshop";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  college: string;
  type: EventType;
  link: string;
  imageUrl?: string;
  organizer?: string;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "TechFest Hackathon 2025",
    description: "A 48-hour competition where students build innovative tech solutions to real-world problems. Open to all majors and skill levels.",
    date: "2025-06-15",
    time: "09:00 AM - 09:00 AM (48 hours)",
    location: "Engineering Building, Room 305",
    college: "MIT",
    type: "hackathon",
    link: "https://mit.edu/techfest",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    organizer: "MIT Computer Science Club"
  },
  {
    id: "2",
    title: "AI Ethics Workshop",
    description: "Explore the ethical implications of artificial intelligence in this hands-on workshop led by industry professionals.",
    date: "2025-06-20",
    time: "2:00 PM - 5:00 PM",
    location: "Science Center, Room 101",
    college: "Harvard University",
    type: "workshop",
    link: "https://harvard.edu/ai-workshop",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    organizer: "Harvard AI Initiative"
  },
  {
    id: "3",
    title: "The Future of Quantum Computing",
    description: "Join Dr. Sarah Johnson for a fascinating talk on the current state and future potential of quantum computing technology.",
    date: "2025-06-22",
    time: "4:00 PM - 6:00 PM",
    location: "Physics Building Auditorium",
    college: "Stanford University",
    type: "techtalk",
    link: "https://stanford.edu/quantum-talk",
    imageUrl: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    organizer: "Stanford Physics Department"
  },
  {
    id: "4",
    title: "Web Development Bootcamp",
    description: "An intensive weekend workshop covering HTML, CSS, JavaScript, and modern frameworks like React.",
    date: "2025-07-10",
    time: "9:00 AM - 5:00 PM",
    location: "Computer Science Building, Lab 203",
    college: "UC Berkeley",
    type: "workshop",
    link: "https://berkeley.edu/webdev",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    organizer: "Berkeley Web Development Club"
  },
  {
    id: "5",
    title: "CyberSec Hackathon",
    description: "Test your cybersecurity skills in this competitive event featuring challenges in network security, cryptography, and more.",
    date: "2025-07-15",
    time: "10:00 AM - 10:00 PM",
    location: "Cyber Lab, Room 405",
    college: "Carnegie Mellon University",
    type: "hackathon",
    link: "https://cmu.edu/cyberhack",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    organizer: "CMU Security Club"
  },
  {
    id: "6",
    title: "Startup Founder Speaker Series",
    description: "Hear from successful tech entrepreneurs about their journeys, challenges, and advice for aspiring founders.",
    date: "2025-07-20",
    time: "6:00 PM - 8:00 PM",
    location: "Business School Auditorium",
    college: "Yale University",
    type: "techtalk",
    link: "https://yale.edu/startup-series",
    imageUrl: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
    organizer: "Yale Entrepreneurship Society"
  },
  {
    id: "7",
    title: "Data Science in Healthcare Workshop",
    description: "Learn how data science is revolutionizing healthcare through hands-on exercises with real-world medical datasets.",
    date: "2025-08-05",
    time: "1:00 PM - 5:00 PM",
    location: "Medical School, Room 210",
    college: "Johns Hopkins University",
    type: "workshop",
    link: "https://jhu.edu/data-health",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    organizer: "JHU Health Data Initiative"
  },
  {
    id: "8",
    title: "Mobile App Design Challenge",
    description: "Design and prototype a mobile app solution for a community problem in this weekend-long competitive event.",
    date: "2025-08-15",
    time: "9:00 AM - 5:00 PM",
    location: "Design Studio, Building C",
    college: "Rhode Island School of Design",
    type: "hackathon",
    link: "https://risd.edu/app-challenge",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    organizer: "RISD Tech + Design Club"
  },
  {
    id: "9",
    title: "Blockchain Technology Explained",
    description: "A comprehensive introduction to blockchain technology, its applications beyond cryptocurrency, and future potential.",
    date: "2025-08-22",
    time: "3:00 PM - 5:00 PM",
    location: "Finance Building, Lecture Hall 2",
    college: "University of Pennsylvania",
    type: "techtalk",
    link: "https://upenn.edu/blockchain-talk",
    imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    organizer: "Wharton Blockchain Club"
  },
  {
    id: "10",
    title: "Game Development Weekend",
    description: "From concept to playable prototype: create a video game in 48 hours with guidance from industry professionals.",
    date: "2025-09-01",
    time: "10:00 AM - 10:00 AM (48 hours)",
    location: "Media Arts Center",
    college: "NYU",
    type: "hackathon",
    link: "https://nyu.edu/gamedev-weekend",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    organizer: "NYU Game Center"
  },
  {
    id: "11",
    title: "Introduction to Robotics Workshop",
    description: "Get hands-on experience building and programming simple robots in this beginner-friendly workshop.",
    date: "2025-09-10",
    time: "2:00 PM - 6:00 PM",
    location: "Engineering Lab 101",
    college: "Caltech",
    type: "workshop",
    link: "https://caltech.edu/robotics-intro",
    imageUrl: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    organizer: "Caltech Robotics Team"
  },
  {
    id: "12",
    title: "Tech Industry Career Panel",
    description: "Representatives from top tech companies discuss career paths, interview tips, and industry trends for students.",
    date: "2025-09-15",
    time: "5:00 PM - 7:00 PM",
    location: "Student Union Ballroom",
    college: "University of Michigan",
    type: "techtalk",
    link: "https://umich.edu/tech-careers",
    imageUrl: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    organizer: "Michigan Engineering Career Center"
  }
];

export const colleges = [
  'All Colleges',
  'MIT',
  'Harvard University',
  'Stanford University',
  'UC Berkeley',
  'Carnegie Mellon University',
  'Yale University',
  'Johns Hopkins University',
  'Rhode Island School of Design',
  'University of Pennsylvania',
  'NYU',
  'Caltech',
  'University of Michigan'
];

export const eventTypes = [
  'All Types',
  'hackathon',
  'techtalk',
  'workshop'
];

export const eventTypeColors: Record<EventType, string> = {
  hackathon: 'bg-event-hackathon',
  techtalk: 'bg-event-techtalk',
  workshop: 'bg-event-workshop'
};

export const eventTypeColorsText: Record<EventType, string> = {
  hackathon: 'text-event-hackathon',
  techtalk: 'text-event-techtalk',
  workshop: 'text-event-workshop'
};
