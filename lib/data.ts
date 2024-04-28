import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import messengerClone from "@/public/messenger-clone.png";
import netflixClone from "@/public/netflix-clone-demo.png";
import vercelClone from "@/public/vercel-clone.png";

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

export const experiencesData = [
    {
        title: "Open Access Technology India",
        location: "Remote",
        description:
            "Led a dynamic UI development initiative for an Extended JavaScript project, leveraging extensive expertise in JavaScript and Windows technology. Achieved a significant enhancement in user experience with a 40% improvement in Performance, ensuring optimal Scalability",
        icon: React.createElement(LuGraduationCap),
        date: "Aug 2022 - July 2023",
    },
    {
        title: "Open Access Technology India",
        location: "Remote",
        description:
            "Led a dynamic UI development initiative for an Extended JavaScript project, leveraging extensive expertise in JavaScript and Windows technology. Achieved a significant enhancement in user experience with a 40% improvement in Performance, ensuring optimal Scalability",
        icon: React.createElement(LuGraduationCap),
        date: "Aug 2022 - July 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Vercel Clone",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
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
        imageUrl: vercelClone,
    },
    {
        title: "Dummy",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: netflixClone,
    },
    {
        title: "Dummy",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: messengerClone,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
