"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2.5 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white borderBlack rounded-full px-5 py-2.5 dark:bg-white/10 dark:text-white/80
                        shadow-md dark:shadow-gray-700 dark:shadow-sm"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <div className="flex items-center justify-between gap-2.5">
                            <Image
                                src={skill.img}
                                alt={skill.name}
                                width={27}
                                height={27}
                                className=" object-fill"
                            />
                            {skill.name}
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
