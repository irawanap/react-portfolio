import project1 from "../assets/projects/project1.png"
import backend from "../assets/projects/backend.png"

export const HERO_CONTENT = `I am a student at Brawijaya University majoring in Diploma Information Technology. I am a web developer and backend developer with technologies used such as NodeJS, React, ExpressJS, PostgreSQL, and Firebase.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer or backend developer with a passion for creating efficient and user-friendly web applications. With a year of professional experience, I have worked with a variety of technologies, including React, ExpressJs, Node.js, MySQL, PostgreSQL, Firebase, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [

  {
    year: " Feb 2025 - Mar 2025",
    role: "Backend Developer Trainee",
    company: "GeekGarden Indonesia",
    description: `Developed RESTful API for web applications using NestJS and Typescript. Implemented logical designs and optimized backend performance.`,
    technologies: ["NestJs", "Typescript", "Postman", "PostgreSql"],
  },
  {
    year: "Sep 2024 - Dec 2024",
    role: "Customer Relationship Management",
    company: "Home Credit Indonesia",
    description: `Developed and schedule campaign on notification app, Whatsapp, Email, and Message.`,
    technologies: ["N/A"],
  },
  {
    year: "Feb 2024 - Jun 2024",
    role: "Cloud Computing",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    description: `Contributed to the development of Backend mobile applications using Python and NodeJs. Managed databases and implemented data storage solutions using Google Cloud Platform. Get Top 50 Best of Capstone Product.`,
    technologies: ["Python", "FastAPI", "NodeJs", "Google Cloud Platform"],
  },
];

export const PROJECTS = [
  {
    title: "ReOil Mobile App",
    image: project1,
    description:
      "Mobile application with features such as used cooking oil scanning, news, and financial transactions.",
    technologies: ["Kotlin", "Google Cloud Platform", "Machine Learning", "Node.js", "Python", "Firebase"],
  },
  {
    title: "RESTful API for Machine Learing",
    image: backend,
    description:
      "Design, develop, and deployment backend API for Machine learning scanning image in a feature mobile app Reoil.",
    technologies: ["Python", "tflite", "Postman", " Google Cloud Run"],
  },
];

export const CONTACT = {
  address: "Malang, Indonesia",
  phoneNo: "-",
  email: "irawanajhi22@gmail.com",
};