"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {
    MdKeyboardDoubleArrowDown,
    MdKeyboardDoubleArrowUp,
} from "react-icons/md";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const [maxProject, setMaxProject] = useState<number>(3);

    useEffect(() => {}, [maxProject]);
    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 mb-28 flex flex-col items-center "
        >
            <SectionHeading>My projects</SectionHeading>
            <div className="flex items-center gap-3 justify-center flex-wrap">
                {projectsData.map(
                    (project, index) =>
                        maxProject > index && (
                            <React.Fragment key={index}>
                                <Project {...project} />
                            </React.Fragment>
                        )
                )}
            </div>
            {maxProject >= projectsData.length ? (
                <button
                    onClick={() => setMaxProject(3)}
                    className="flex items-center gap-1 mt-8 bg-black/[0.7] p-3 text-[0.7rem] uppercase tracking-wider
                    text-white rounded-full dark:text-white/70"
                >
                    Show less
                    <MdKeyboardDoubleArrowUp className="w-4 h-4" />
                </button>
            ) : (
                <button
                    onClick={() => setMaxProject((prev) => prev + 3)}
                    className="flex items-center gap-1 mt-8 bg-black/[0.7] p-3 text-[0.7rem] uppercase tracking-wider
                 text-white rounded-full dark:text-white/70"
                >
                    Show more
                    <MdKeyboardDoubleArrowDown className="w-4 h-4" />
                </button>
            )}
        </section>
    );
}
