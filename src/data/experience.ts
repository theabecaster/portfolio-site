export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Innovation Inc.",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led the development of the company's flagship product using React and TypeScript",
      "Implemented responsive designs and optimized performance, improving load times by 40%",
      "Collaborated with UX designers to implement new features and improve user experience",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "exp-2",
    company: "Digital Solutions LLC",
    position: "Full Stack Developer",
    location: "Austin, TX",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: [
      "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
      "Designed and implemented REST APIs for mobile and web clients",
      "Implemented authentication and authorization using JWT and OAuth",
      "Participated in agile development processes, including daily standups and sprint planning",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API", "Redux"],
  },
  {
    id: "exp-3",
    company: "Creative Web Agency",
    position: "Frontend Developer",
    location: "Remote",
    startDate: "Mar 2018",
    endDate: "May 2020",
    description: [
      "Built responsive websites for various clients across different industries",
      "Collaborated with designers to implement pixel-perfect designs",
      "Optimized websites for maximum speed and scalability",
      "Implemented tracking and analytics to measure user engagement",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "SASS", "WordPress", "jQuery"],
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Boston, MA",
    startDate: "Sep 2014",
    endDate: "May 2018",
    description: "Graduated with honors. Specialized in web development and software engineering.",
    achievements: [
      "Dean's List (All Semesters)",
      "Senior Project: Developed a web-based project management tool",
      "Participated in ACM Programming Competition",
    ],
  },
  {
    id: "edu-2",
    institution: "Frontend Masters",
    degree: "Professional Certificate",
    field: "Advanced React Patterns",
    location: "Online",
    startDate: "Jan 2019",
    endDate: "Apr 2019",
    description: "Completed intensive training program focused on advanced React patterns and best practices.",
  },
];
