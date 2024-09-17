"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useModalContext } from "@/context/modalContext";
import { dataType } from "@/lib/types";
import Tags from "./tags";
import React from "react";

export default function Project({
    projectData,
    lazy,
}: {
    projectData: dataType;
    lazy: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { isModalOpen, setIsModalOpen, setData } = useModalContext();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
            onClick={() => {
                setIsModalOpen(true);
                setData(projectData);
            }}
        >
            <section
                className="bg-gray-100 max-w-[40rem] border border-black/5 min-h-[24rem] rounded-lg overflow-hidden 
            sm:pr-8 relative sm:h-[24rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white 
            dark:bg-white/10 dark:hover:bg-white/20 drop-shadow-md"
            >
                <div className="h-full">
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-around h-full sm:group-even:ml-[18rem]">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                {projectData.title}
                            </h3>
                            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                                {projectData.description}
                            </p>
                        </div>
                        <Image
                            src={projectData.imageUrl}
                            alt="Project image"
                            quality={95}
                            width={400}
                            height={400}
                            className="block sm:hidden py-3 rounded-md transition group-hover:scale-[1.04] group-hover:translate-2"
                            loading={lazy ? "lazy" : "eager"}
                        />
                        <Tags tags={projectData.tags.slice(0, 5)} more={true} />
                    </div>

                    <Image
                        src={projectData.imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[14rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                        loading={lazy ? "lazy" : "eager"}
                    />
                </div>
            </section>
        </motion.div>
    );
}
