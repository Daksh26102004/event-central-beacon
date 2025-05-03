
# 🎓 Campus Event Central

A modern web application for discovering and sharing tech events, hackathons, and workshops across college campuses.

![Campus Event Central Screenshot](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)

## 🚀 Features

- **Event Discovery**: Browse upcoming tech events, hackathons, and workshops from various colleges
- **Event Submission**: Allow users to manually add new events with comprehensive details
- **Advanced Filtering**: Filter events by date, event type, college name, and more
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with a focus on event details

## 🛠️ Technology Stack

- **React**: Frontend UI library
- **TypeScript**: For type safety
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Component library for consistent design
- **React Router**: For page navigation
- **date-fns**: Date manipulation library
- **Vite**: Fast build tool

## 🏗️ Project Structure

```
src/
├── components/          # UI components
│   ├── EventCard.tsx    # Card component for displaying event
│   ├── EventsList.tsx   # Grid of event cards
│   ├── EventForm.tsx    # Form for adding new events
│   ├── FilterBar.tsx    # Filtering controls
│   └── Header.tsx       # App header with navigation
├── hooks/
│   └── useEvents.tsx    # Custom hook for event management
├── lib/
│   ├── mockData.ts      # Sample event data
│   └── utils.ts         # Utility functions
├── pages/
│   ├── Index.tsx        # Main page with events dashboard
│   └── NotFound.tsx     # 404 page
└── App.tsx              # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/campus-event-central.git
cd campus-event-central
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:8080`

## 📝 Usage

### Browsing Events

- The main page displays all upcoming events in a card layout
- Use the search bar to find events by keyword
- Filter events by college, event type, and date range

### Adding Events

1. Click the "Add Event" button in the header
2. Fill in the event details in the form
3. Submit the form to add the event to the list

## 🧩 Extending the Project

### Adding Real Data Sources

To replace the mock data with real event data:

1. Create a new service in `src/services/` to fetch events from APIs
2. Update the `useEvents` hook to use this service
3. Implement proper error handling for API calls

### Implementing Authentication

To add user accounts and authentication:

1. Set up an authentication provider (Firebase, Auth0, etc.)
2. Create login/signup components
3. Add protected routes for event submission

### Backend Integration

To connect to a backend service:

1. Create an API client service
2. Update the event submission logic to post to your backend
3. Implement proper data synchronization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the component library
- [Unsplash](https://unsplash.com/) for placeholder images
- [Lucide Icons](https://lucide.dev/) for the icon set
