import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import messengerClone from "@/public/messenger-clone.png";
import netflixClone from "@/public/netflix-clone-demo.png";
import vercelClone from "@/public/vercel-clone.png";
import twitter from "@/public/twitter.png";
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
        name: "Timeline",
        hash: "#timeline",
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
        companyName: "Freelancer",
        title: "Part-time",
        experience: "1 year 1 month",
        location: "Remote",
        description:
            "Architected and deployed a micro-services based projects for clients with Node.js, Typescript, and Next.js, leveraging Docker, AWS services, Kafka and Redis to enhancing scalability and system maintainability.",
        icon: React.createElement(RiProfileLine),
        date: "Aug 2023 - Current",
        techStack: [
            "Javascript",
            "Typescript",
            "Docker",
            "Node.js",
            "Next.js",
            "Kafka",
            "AWS",
        ],
    },
    {
        companyName: "Open Access Technology India",
        title: "Associate software developer",
        experience: "1 year",
        location: "Remote",
        description: `Designed micro-service architectures for both front-end (React) and back-end (Node.js, PostgreSQL) components,leading to a robust and scalable application. Led the development of a real-time chat feature using WebSockets, resulting in a 20% increase in user engagement.`,
        icon: React.createElement(RiProfileLine),
        date: "Aug 2022 - July 2023",
        techStack: ["React.js", "Node.js", "Typescript", "Javascript"],
    },
] as const;

export const projectsData = [
    {
        title: "Project Builder",
        description:
            "Project Builder is a platform where we can deploy our react based project on cloud in just few mintues.",
        tags: [
            "Next.js",
            "React",
            "PostgreSql",
            "Tailwind",
            "Prisma",
            "AWS",
            "Kafka",
            "clickHouse",
            "Node.js",
            "Docker",
            "CI/CD",
            "Github Actions",
        ],
        gitURL: "https://github.com/vishalp-65/Project_Builder.git",
        liveDemo: "",
        details: [
            "Developed using Node.js, JavaScript, TypeScript, S3, Docker, ECS, Kafka, PostgreSQL, and Next.js, ensuring a robust and scalable application.",
            "Utilized ECR for container image management, ensuring scalable deployment and efficient resource utilization.",
            "Employed AWSS3for build storage, enhancing reliability and utilized ECS for dynamic container spin-up, ensuring efficient resource allocation and scalability.",
            "Created container images with Docker, deployed them to Amazon ECR, and streamed all logs to ClickHouse using Kafka, improving log management and analysis.",
            "Integrated Kafka and ClickHouse for real-time log streaming, reducing logging costs by 20% and improving deployment speed by 25%. This also enhanced real-time monitoring and debugging capabilities.",
            "Implemented CI/CD using webhooks and GitHub Actions, enabling auto-deploy on commit, and added user authentication with GitHub integration for streamlined deployments",
        ],
        date: "April 2024",
        imageUrl: vercelClone,
    },
    {
        title: "Twitter",
        description:
            "Twitter is platform using Next.js, featuring user authentication, tweet posting, and a following/follower system with real-time updates.",
        tags: [
            "Next.js",
            "React",
            "PostgreSql",
            "Tailwind",
            "Prisma",
            "GraphQL",
            "Cloud-front",
            "AWS",
            "Redis",
            "EC2",
            "Node.js",
            "Load balancer",
        ],
        gitURL: "https://github.com/vishalp-65/twitter.git",
        liveDemo: "https://twitter-sigma-cyan.vercel.app/",
        details: [
            "Created a Twitter using Next.js with user authentication, tweet posting, a following/follower system, real-time updates, and a user recommendation system.",
            "Utilized PostgreSQL as database and GraphQL to fetch necessary data, enhance application scalability & performance.",
            "Integrated Redis for caching expensive queries like user recommendations, improving speed by 30% and reducing database load by 40%.",
            "Deployed on EC2 with a load balancer for high availability and scalability, enhancing security with CloudFront for secure connections and data integrity.",
            "Implemented rate limiting on tweets to prevent unnecessary strain on the database, reducing potential costs by 15% and enhancing application performance.",
        ],
        date: "April 2024",
        imageUrl: twitter,
    },
    {
        title: "Netflix",
        description:
            "Made a Netflix UI clone along with authentication using NextAuth.",
        tags: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB", "NextAuth"],
        gitURL: "https://github.com/vishalp-65/netflix-clone.git",
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
            "Messenger is a chatting website where we can send messeges in real-time to single user as well as in group",
        tags: [
            "Next.js",
            "Tailwind",
            "Prisma",
            "MongoDB",
            "Pusher",
            "NextAuth",
            "CDN",
        ],
        gitURL: "https://github.com/vishalp-65/Messenger_Clone.git",
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
            "MongoDB",
            "Node.js",
            "Express",
        ],
        gitURL: "https://github.com/vishalp-65/CRM_App.git",
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
            "MongoDB",
            "Node.js",
            "Express",
            "Debouncing",
        ],
        gitURL: "https://github.com/vishalp-65/Q_Kart-React.git",
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
        gitURL: "https://github.com/vishalp-65/Flight-Booking-Backend-.git",
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
    { name: "JavaScript", img: "/skills/javascript.svg" },
    { name: "Typescript", img: "/skills/typescript.svg" },
    { name: "React", img: "/skills/react.svg" },
    { name: "Node.js", img: "/skills/nodejs.svg" },
    { name: "Express", img: "/skills/express.svg" },
    { name: "Next.js", img: "/skills/nextjs.svg" },
    { name: "GraphQL", img: "/skills/graphql.svg" },
    { name: "Git", img: "/skills/git.svg" },
    { name: "Redis", img: "/skills/redis.svg" },
    { name: "MongoDB", img: "/skills/mongodb.svg" },
    { name: "Redux", img: "/skills/redux.svg" },
    { name: "Tailwind CSS", img: "/skills/tailwind.svg" },
    { name: "PostgreSQL", img: "/skills/postgresql.svg" },
    { name: "Docker", img: "/skills/docker.svg" },
    { name: "AWS", img: "/skills/aws.svg" },
    { name: "Prisma", img: "/skills/prisma.svg" },
    { name: "C++", img: "/skills/c++.svg" },
    { name: "HTML", img: "/skills/html.svg" },
    { name: "CSS", img: "/skills/css.svg" },
    { name: "Kafka", img: "/skills/kafka.png" },
    { name: "Socket.io", img: "/skills/socket.png" },
    { name: "Postman", img: "/skills/postman.png" },
    { name: "CI/CD", img: "/skills/cicd.png" },
    { name: "Github Actions", img: "/skills/github_action.svg" },
] as const;
