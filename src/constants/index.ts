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
    yearOfExperienceLabel: "3 years of professional experience",
  },
  {
    name: "CSS",
    src: "/icons/css.png",
    yearOfExperienceLabel: "3 years of professional experience",
  },
  {
    name: "SASS/SCSS",
    src: "/icons/sass.png",
    yearOfExperienceLabel: "3 years of professional experience",
  },
  {
    name: "Tailwind CSS",
    src: "/icons/tailwind.svg",
    yearOfExperienceLabel: "2 years of professional experience",
  },
  {
    name: "Styled Components",
    src: "/icons/styled-com.svg",
    yearOfExperienceLabel: "2 years of professional experience",
  },
  {
    name: "Ant Design",
    src: "/icons/ant-design.svg",
    yearOfExperienceLabel: "1 year of professional experience",
  },
  {
    name: "JavaScript",
    src: "/icons/js.png",
    yearOfExperienceLabel: "3 years of professional experience",
  },
  {
    name: "Node.js",
    src: "/icons/nodejs.svg",
    yearOfExperienceLabel: "1 year of professional experience",
  },

  {
    name: "TypeScript",
    src: "/icons/ts.svg",
    yearOfExperienceLabel: "1 year of professional experience",
  },

  {
    name: "React JS",
    src: "/icons/react.png",
    yearOfExperienceLabel: "2 years of professional experience",
  },
  {
    name: "Next JS",
    src: "/icons/next.svg",
    yearOfExperienceLabel: "2 years of professional experience",
  },
  {
    name: "Astro",
    src: "/icons/astro.png",
    yearOfExperienceLabel: "<1 year of professional experience",
  },
  {
    name: "Apollo GraphQL",
    src: "/icons/apollo-graphql.svg",
    yearOfExperienceLabel: "<1 year of professional experience",
  },
  {
    name: "Jotai",
    src: "/icons/jotai-mascot.png",
    yearOfExperienceLabel: "<1 year of professional experience",
  },
] as const;

export const PROJECTS = [
  {
    imageUrl: "/projects/1.png",
    url: "https://powerchap.co/",
    name: "Powerchap",
    id: "powerchap",
  },
  {
    imageUrl: "/projects/2.png",
    url: "https://social-media-devnazir.vercel.app/dashboard",
    name: "SociaBord",
    id: "sociabord",
  },
  {
    imageUrl: "/projects/3.png",
    url: "https://chatbot-devnazir.vercel.app/dashboard",
    name: "ChatBot Dashboard",
    id: "chatbot-dashboard",
  },
  {
    imageUrl: "/projects/4.png",
    url: "https://chatbot-devnazir.vercel.app",
    name: "ChatBot",
    id: "chatbot-landing",
  },
  {
    imageUrl: "/projects/5.png",
    url: "https://febelvn-devnazir.vercel.app/",
    name: "Febelvn",
    id: "febelvn",
  },
  {
    imageUrl: "/projects/6.png",
    url: "https://ngo-devnazir.vercel.app/",
    name: "NGO Eyes",
    id: "ngo-eyes",
  },
  {
    imageUrl: "/projects/7.png",
    url: "https://devnazir.github.io/sage/",
    name: "Sage",
    id: "sage",
  },
  {
    imageUrl: "/projects/8.png",
    url: "https://devnazir.github.io/movietrailer/",
    name: "Movie Trailer",
    id: "movie-trailer",
  },
  {
    imageUrl: "/projects/9.png",
    url: "https://devnazir.github.io/mainan/",
    name: "Mainan",
    id: "mainan",
  },
  {
    imageUrl: "/projects/10.png",
    url: "https://devnazir.github.io/kelas-io/",
    name: "Kelas.io",
    id: "kelas-io",
  },
  {
    imageUrl: "/projects/11.png",
    url: "https://www.starbimbel.com/",
    name: "Star Bimbel",
    id: "star-bimbel",
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
    In my role, I work closely with designers to ensure that the visual design aligns seamlessly with the implementation of our projects. Collaboration with our QA team is essential to guarantee the delivery of high-quality products. Additionally, I regularly interact with our product management team to gather requirements and provide recommendations based on my analysis. Part of my responsibilities includes participating in code reviews to maintain our coding standards at a high level. For project tracking and management, we rely on Jira as our primary tool. In the development process, I utilize the Next.js framework to create fast and scalable React applications, and I implement projects using TypeScript to enhance static typing and code maintenance. When technical issues arise, I am proactive in engaging in bug fixing and resolving them promptly to minimize disruption. To stay current with the ever-evolving landscape of frontend technologies and tools, I conduct ongoing research. Furthermore, I am committed to refactoring existing code to improve its performance, maintainability, and scalability. Lastly, I consistently adhere to best practices and coding standards to ensure that our code maintains a high level of quality and readability.
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
      I've developed and maintained web applications using HTML, CSS, and JavaScript for diverse clients. Collaborating closely with clients, I ensure project goals and deliverables are met while creating visually appealing and user-friendly interfaces. Staying updated with industry best practices, I continuously improve development processes.
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
      I've implemented UI designs using React JS, HTML, and CSS, working closely with backend developers to seamlessly integrate APIs. My collaboration with designers ensured a pixel-perfect UI, resulting in a polished user experience.
    `,
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
];
