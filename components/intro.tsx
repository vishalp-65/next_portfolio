/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import MyImg from "@/public/myImg.jpg";
import { TbBrandLeetcode } from "react-icons/tb";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={MyImg}
                            alt="Ricardo portrait"
                            width="275"
                            height="275"
                            quality="95"
                            priority={true}
                            className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-5 right-5 text-5xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Vishal.</span> I'm a{" "}
                <span className="font-bold">Full-Stack developer</span> with{" "}
                <span className="font-bold">2+ years</span> of experience. I
                enjoy building <span className="italic">sites & apps</span>. My
                focus is{" "}
                <span className="underline">Node.js, React (Next.js)</span>
                <span> and deployment</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="https://drive.google.com/file/d/1O1ZmP47ZBa3pJ81e2RetygZ4X8lsTnWN/view?usp=sharing"
                    target="_blank"
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <div className="flex flex-row items-center gap-2">
                    <a
                        className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://www.linkedin.com/in/vishalp65/"
                        target="_blank"
                    >
                        <BsLinkedin className="h-6 w-6" />
                    </a>

                    <a
                        className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/vishalp-65"
                        target="_blank"
                    >
                        <FaGithubSquare className="h-7 w-7" />
                    </a>
                    <a
                        className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://leetcode.com/u/vishalp65/"
                        target="_blank"
                    >
                        <TbBrandLeetcode className="h-7 w-7" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
