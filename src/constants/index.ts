export const MENUS = [
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Work Experience",
    path: "/experience",
  },
] as const;

export const SKILLS = [
  {
    name: "HTML",
    src: "/icons/html.png",
  },
  {
    name: "CSS",
    src: "/icons/css.png",
  },
  {
    name: "SASS/SCSS",
    src: "/icons/sass.png",
  },
  {
    name: "Tailwind CSS",
    src: "/icons/tailwind.svg",
  },
  {
    name: "Styled Components",
    src: "/icons/styled-com.svg",
  },
  {
    name: "Ant Design",
    src: "/icons/ant-design.svg",
  },
  {
    name: "JavaScript",
    src: "/icons/js.png",
  },
  {
    name: "Node.js",
    src: "/icons/nodejs.svg",
  },

  {
    name: "TypeScript",
    src: "/icons/ts.svg",
  },

  {
    name: "React JS",
    src: "/icons/react.png",
  },
  {
    name: "Next JS",
    src: "/icons/next.svg",
  },
  {
    name: "Astro",
    src: "/icons/astro.png",
  },
  {
    name: "Apollo GraphQL",
    src: "/icons/apollo-graphql.svg",
  },
  {
    name: "Jotai",
    src: "/icons/jotai-mascot.png",
  },
] as const;

export const PROJECTS = [
  {
    imageUrl: "/projects/1.png",
    url: "https://powerchap.co/",
    name: "Powerchap",
  },
  {
    imageUrl: "/projects/2.png",
    url: "https://social-media-devnazir.vercel.app/dashboard",
    name: "SociaBord",
  },
  {
    imageUrl: "/projects/3.png",
    url: "https://chatbot-devnazir.vercel.app/dashboard",
    name: "ChatBot Dashboard",
  },
  {
    imageUrl: "/projects/4.png",
    url: "https://chatbot-devnazir.vercel.app",
    name: "ChatBot",
  },
  {
    imageUrl: "/projects/5.png",
    url: "https://febelvn-devnazir.vercel.app/",
    name: "Febelvn",
  },
  {
    imageUrl: "/projects/6.png",
    url: "https://ngo-devnazir.vercel.app/",
    name: "NGO Eyes",
  },
  {
    imageUrl: "/projects/7.png",
    url: "https://devnazir.github.io/sage/",
    name: "Sage",
  },
  {
    imageUrl: "/projects/8.png",
    url: "https://devnazir.github.io/movietrailer/",
    name: "Movie Trailer",
  },
  {
    imageUrl: "/projects/9.png",
    url: "https://devnazir.github.io/mainan/",
    name: "Mainan",
  },
  {
    imageUrl: "/projects/10.png",
    url: "https://devnazir.github.io/kelas-io/",
    name: "Kelas.io",
  },
  {
    imageUrl: "/projects/11.png",
    url: "https://www.starbimbel.com/",
    name: "Star Bimbel",
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Software Engineer, Frontend",
    start: "March 2022",
    end: "Present",
    employeeType: "Full Time",
    company: "Dealls (YC W22)",
    description: `
      - Work closely with designers to ensure visual design and implementation match.
      - Collaborate with QA team to guarantee high-quality product delivery.
      - Interact with product management to gather requirements and make recommendations.
      - Conduct analysis and identify opportunities for improvement.
      - Participate in code review to maintain high coding standards.
      - Use Jira for project tracking and management.
      - Utilize Next.js framework for building fast and scalable React applications.
      - Implement projects using TypeScript for static typing and improved code maintenance.
      - Engage in bug fixing and resolve technical issues in a timely manner.
      - Conduct research and stay up-to-date on the latest frontend technologies and tools.
      - Refactor existing code to improve performance, maintainability, and scalability.
      - Adhere to best practices and coding standards to ensure code quality and readability.
    `,
    skills: [
      "React JS",
      "Next JS",
      "TypeScript",
      "Jotai",
      "Tailwind CSS",
      "Styled Components",
      "Ant Design",
    ],
  },
  {
    title: "Frontend Web Developer",
    start: "May 2021",
    end: "March 2022",
    employeeType: "Freelance",
    company: "Potatos Studio",
    description: `
      - Developed and maintained web applications for a variety of clients using HTML, CSS, and JavaScript
      - Collaborated with clients to determine project goals and deliverables
      - Implemented visually appealing and user-friendly interfaces
      - Stayed up-to-date with industry best practices and technologies to continuously improve development processes
    `,
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
  {
    title: "React JS Developer",
    start: "May 2021",
    end: "Oct 2021",
    employeeType: "Contract",
    company: "ChicodeFive Development",
    description: `
      - Implemented UI designs using React JS, HTML, and CSS
      - Collaborated with backend developers to integrate APIs
      - Collaborated with designers to achieve pixel-perfect UI
    `,
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
];
