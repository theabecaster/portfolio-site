export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, user authentication, and admin dashboard.",
    longDescription: "This e-commerce platform features product listings, shopping cart functionality, secure Stripe payment processing, user authentication, and an admin dashboard for managing products and orders. Built with Next.js, TypeScript, Tailwind CSS, and MongoDB.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    demoUrl: "https://ecommerce-demo.example.com",
    codeUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    longDescription: "This task management application allows users to create, assign, and track tasks within teams. It features real-time updates using WebSockets, drag-and-drop interfaces, and detailed reporting. Built with React, Node.js, Express, and PostgreSQL.",
    image: "/projects/task-management.jpg",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
    demoUrl: "https://taskmanager-demo.example.com",
    codeUrl: "https://github.com/yourusername/task-management",
    featured: true,
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
    longDescription: "This weather dashboard application integrates with multiple weather APIs to provide users with current conditions, hourly forecasts, and 7-day predictions. It features interactive maps, location search, and personalized user settings. Built with React, Redux, and Chart.js.",
    image: "/projects/weather-dashboard.jpg",
    tags: ["React", "Redux", "Chart.js", "API Integration"],
    demoUrl: "https://weather-demo.example.com",
    codeUrl: "https://github.com/yourusername/weather-dashboard",
    featured: true,
  },
  {
    id: "project-4",
    title: "Personal Finance Tracker",
    description: "A personal finance tracking application with budget planning and expense visualization.",
    longDescription: "This finance tracker allows users to monitor income and expenses, set budget goals, and visualize spending patterns. It includes features like transaction categorization, recurring transaction management, and financial goal tracking. Built with React, Firebase, and D3.js for visualizations.",
    image: "/projects/finance-tracker.jpg",
    tags: ["React", "Firebase", "D3.js", "Authentication"],
    demoUrl: "https://finance-demo.example.com",
    codeUrl: "https://github.com/yourusername/finance-tracker",
    featured: false,
  },
  {
    id: "project-5",
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform with search and filtering capabilities.",
    longDescription: "This recipe sharing platform enables users to discover, save, and share recipes. It features advanced search and filtering options, user reviews, and nutritional information calculation. Built with Next.js, MongoDB, and AWS S3 for image storage.",
    image: "/projects/recipe-platform.jpg",
    tags: ["Next.js", "MongoDB", "AWS S3", "Authentication"],
    demoUrl: "https://recipe-demo.example.com",
    codeUrl: "https://github.com/yourusername/recipe-platform",
    featured: false,
  },
  {
    id: "project-6",
    title: "Fitness Tracking App",
    description: "A comprehensive fitness tracking application with workout plans and progress visualization.",
    longDescription: "This fitness application helps users track workouts, set fitness goals, and monitor progress over time. It includes features like custom workout creation, exercise libraries with video demonstrations, and progress charts. Built with React Native, Node.js, and MongoDB.",
    image: "/projects/fitness-app.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    demoUrl: "https://fitness-demo.example.com",
    codeUrl: "https://github.com/yourusername/fitness-app",
    featured: false,
  },
];
