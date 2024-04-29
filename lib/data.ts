import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import messengerClone from "@/public/messenger-clone.png";
import netflixClone from "@/public/netflix-clone-demo.png";
import vercelClone from "@/public/vercel-clone.png";
import qkart from "@/public/qkart.png";
import flight from "@/public/flight.png";
import crmApp from "@/public/crm-app.png";
import { RiProfileLine } from "react-icons/ri";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const educationData = [
    {
        title: "MCA (Master of computer application",
        location: "Yamunanagar",
        collageName: "TIMT",
        date: "Aug 2020-July 2022",
        icon: React.createElement(LuGraduationCap),
        grade: "7.5",
    },
    {
        title: "BCA (Bachelor of computer application",
        location: "Karnal",
        collageName: "Pt. CLS college",
        date: "Aug 2017-July 2020",
        icon: React.createElement(LuGraduationCap),
        grade: "7.2",
    },
] as const;

export const experiencesData = [
    {
        title: "Open Access Technology India",
        location: "Remote",
        description:
            "Led a dynamic UI development initiative for an Extended JavaScript project, leveraging extensive expertise in JavaScript and Windows technology. Achieved a significant enhancement in user experience with a 40% improvement in Performance, ensuring optimal Scalability",
        icon: React.createElement(RiProfileLine),
        date: "Aug 2022 - July 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Vercel Clone",
        description:
            "Vercel clone is a platform where we can deploy our react based project on cloud in just few mintues.",
        tags: [
            "React",
            "Next.js",
            "PostgreSql",
            "Tailwind",
            "Prisma",
            "AWS",
            "Kafka",
            "clickHouse",
            "Node.js",
            "Docker",
        ],
        gitURL: "https://github.com/VisHaL0023/vercel-clone.git",
        liveDemo: "",
        details: [
            "Designed Vercel clone with Node.js, JavaScript, S3, Docker, ECS, kafka and used postgresql as database.",
            "Used AWSECRforcontainer image management, ensuring scalable deployment and efficient resource utilization.",
            "Employed AWS S3for build storage, enhancing reliability and Utilized ECS for dynamic container spin-up, ensuring efficient resource allocation and scalability of the application.",
            "Utilized Docker for container image creation, deploying to Amazon ECR for streamlined deployment and stream all logs to the clickhouse using kafka.",
            "Integrated kafka and clickhouse to enable real-time log streaming and polling logs on the fronted.",
        ],
        date: "April 2024",
        imageUrl: vercelClone,
    },
    {
        title: "Netflix",
        description:
            "Made a Netflix UI clone along with authentication using NextAuth.",
        tags: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB", "NextAuth"],
        gitURL: "https://github.com/VisHaL0023/netflix-clone.git",
        liveDemo: "https://nettfliix-vp.netlify.app/auth",
        details: [
            "Leveraged Next.js for server-side rendering, enhancing performance and SEO. Integrated NextAuth for secure authentication, enabling smooth user login via Google & GitHub.",
            "Implemented TypeScript for improved code readability and type safety. Employed cookie-based authentication for enhanced security and personalized user sessions.",
            "Implemented MongoDB & Prisma for efficient database management, ensuring seamless data operations and scalability. Ensured full responsiveness on all pages, providing a consistent user experience across various devices",
        ],
        date: "April 2024",
        imageUrl: netflixClone,
    },
    {
        title: "Messenger",
        description:
            "Messenger is a chatting website where we can send messeges in real-time with a single user as well as in group",
        tags: [
            "Next.js",
            "Tailwind",
            "Prisma",
            "MongoDb",
            "Pusher",
            "NextAuth",
            "CDN",
        ],
        gitURL: "https://github.com/VisHaL0023/Messenger_Clone.git",
        liveDemo: "https://messenger-clone-nine-black.vercel.app/",
        details: [
            "Engineered a responsive messaging app with Next.js, Tailwind, and NextAuth, utilizing MongoDB for data storage. Implemented Pusher for real-time messaging and Cloudinary CDN for image uploads.",
            "Developed comprehensive features including file sharing, group chat, and chat room management, enhancing user interaction and collaboration and overall improve speed of app.",
            "Orchestrated CRUD operations for seamless data management, ensuring efficient functionality and scalability of the messaging application.",
        ],
        date: "Aug 2023-Nov 2023",
        imageUrl: messengerClone,
    },
    {
        title: "CRM App",
        description:
            "CRM is a overall one solution to manage all tickets and user related problem at one place.",
        tags: [
            "Redux",
            "React",
            "Tailwind",
            "React chart",
            "MongoDb",
            "Node.js",
            "Express",
        ],
        gitURL: "https://github.com/VisHaL0023/CRM_App.git",
        liveDemo: "https://crm-app-vishal.netlify.app/",
        details: [
            "Leveraged MERN stack with Redux Toolkit for streamlined state management, resulting in a 15% improvement in application speed and user interaction.",
            "Established role-based access control (RBAC)- Admin for oversight, Engineer for ticket management, and Customer for creation. Empowered Engineers to manage tickets while enabling Admins to oversee all operations for seamless workflow.",
            "Incorporated chart visualization using React Chart.js to provide Admins with insightful ticket metrics for decision-making.",
        ],
        date: "March 2024-April 2024",
        imageUrl: crmApp,
    },
    {
        title: "Qkart E-commerce",
        description:
            "Qkart is a online shopping website where a user can buy or check the product online.",
        tags: [
            "React",
            "Material UI",
            "Context API",
            "MongoDb",
            "Node.js",
            "Express",
            "Debouncing",
        ],
        gitURL: "https://github.com/VisHaL0023/Q_Kart-React.git",
        liveDemo: "https://qkart-ecommerce-vishal.netlify.app/",
        details: [
            "Boosted state management with Context APIs, enhancing performance by 25% and streamlining maintainability across components.",
            "Improved UI interface by adding responsive design elements for a uniform experience across different devices using CSS Framework Material UI.",
            "Optimized the search feature using Debouncing and Facilitated CRUD operations on the client side to select, add, and delete addresses for delivery Fulfilled global accessibility by deploying the application backend on Render and frontend on Vercel, resulting in a 40% improvement in user reach.",
        ],
        date: "Sept 2023-Oct 2023",
        imageUrl: qkart,
    },
    {
        title: "Flight Booking",
        description:
            "It's a backend API which performs flight booking related tasks. Like- ticket creation, secheduling, cancelation etc",
        tags: [
            "Node.js",
            "MySQL",
            "Sequelze ORM",
            "Rebbit MQ",
            "Express",
            "Cron jobs",
            "JWT",
            "AWS",
        ],
        gitURL: "https://github.com/VisHaL0023/Flight-Booking-Backend-.git",
        liveDemo: "",
        details: [
            "Created RESTful APIs for seamless frontend-backend communication based on Micro-Services architecture.",
            "Successfully optimized database queries and improved API response times by 30% through query optimization and indexing techniques.",
            "Ensured data integrity and consistency by designing and implementing MySQL transactions for critical booking operations.",
            "Developed a robust user authentication and authorization system using JWT, enhancing data security and user experience.",
        ],
        date: "May 2023-Aug 2023",
        imageUrl: flight,
    },
] as const;

export const skillsData = [
    "JavaScript",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Kafka",
    "clickHous",
    "AWS",
    "Redis",
    "SQL",
    "Socket.io",
    "Docker",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "HTML",
    "Postman",
    "CSS",
    "Framer Motion",
] as const;
