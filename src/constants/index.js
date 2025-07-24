import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/email-extension.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a strong foundation in building robust and scalable web applications. I’ve worked extensively with React , Node.js, MySQL, PostgreSQL, and MongoDB through personal projects and academic work. I enjoy turning complex problems into elegant, user-friendly solutions and strive to deliver clean, maintainable code. I'm eager to contribute to real-world products, learn from experienced teams, and grow into a key contributor in fast-paced development environments.`;

export const ABOUT_TEXT = `I’m a passionate and self-driven full stack developer with hands-on experience in building modern, responsive web applications. I’ve worked extensively on personal and academic projects using React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. These projects have helped me develop a strong understanding of both front-end and back-end development.

I enjoy solving problems through code, building clean and scalable solutions, and learning new technologies that make development more efficient. I'm comfortable working independently as well as collaborating with a team, and I’m eager to contribute to real-world applications and continue growing as a developer.

I enjoy learning new technologies, solving real-world problems, and continuously improving my skills. I’m confident in my ability to contribute to development teams and build scalable, high-quality applications.`;

export const EDUCATION = [
  {
    year: "2026 - Expected",
    role: " BMS College of Engineering",
    company: "Bengaluru",
    technologies: ["CGPA : 9.48"],
  },
  {
    year: "2021",
    role: "KLE G.I. Bagewadi College",
    company: "Nipani",
    technologies: ["98%"],
  },
  {
    year: "2019",
    role: "Akol Highschool Akol",
    company: "Akol",
    technologies: ["95.52%"],
  },
  
];


export const PROJECTS = [
  {
    title: "SkillUp",
    image: project1,
    description:
      "Built an online learning platform with role-based login using JWT and session handling with HTTP-only cookies. Used Redis (Upstash) to speed up data access and reduce database calls. Managed API calls with RTK Query and added Stripe for payments. Handled media uploads and optimization with Cloudinary. Designed a clean, responsive UI with ShadCN and Tailwind CSS",
    technologies: ["React", "Node.js", "MongoDB","Cloudinary","   Redis" , "Tailwind CSS"]
  },

  {
    title: "Interactive CPU Scheduling Visualizer",
    image: project2,
    description:
      "Built a CPU scheduling visualizer supporting multiple algorithms with beautifully designed, animated Gantt charts and detailed process tables. Calculates average waiting and turnaround times. Utilizes LocalStorage for client-side data persistence and includes a comparison section to analyze algorithm performance.",
    technologies: ["React", "DaisyUI", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
  {
    title: "Smart Email Assistant",
    image: project3,
    description:
      "Developed a Chrome extension that adds an “AI Reply” button in Gmail, generating context-aware email responses using Gemini-1.5 Flash. Supports multiple tones like professional, casual, and friendly, helping users save time typing and send clear, well-tailored replies for better communication.",
    technologies: ["Chrome Extension Development","Gemini-1.5 Flash", "MERN Stack"],
  },
  {
    title: "Multiagent AI System for Japanese Manga Translation",
    image: project4,
    description:
      "Collaborated in a team to build a multi-agent system for translating Japanese manga, with each intelligent agent specialized in OCR, translation, object detection, and typesetting. The system combined computer vision and NLP models to replicate the scanlation workflow and produce high-quality translated manga pages efficiently and at scale.",
    technologies: ["Agent Development Kit (ADK)", " gemini-2.0-Flash"],
  },
];

export const CONTACT = {
  address: "BVSS Maratha Students Home , Bengaluru",
  phoneNo: "9743785813",
  email: "ravirajutture123@gmail.com",
};
