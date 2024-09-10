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
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const [maxProject, setMaxProject] = useState<number>(3);
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    useEffect(() => {}, [maxProject]);
    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 mb-28 flex flex-col items-center"
        >
            <SectionHeading>My projects</SectionHeading>
            <div className="flex flex-col items-center gap-3 justify-center rounded-md">
                <Carousel
                    setApi={setApi}
                    className="flex items-center justify-center w-screen md:max-w-[50rem]"
                >
                    <CarouselContent>
                        {projectsData.map((project: any, index) => (
                            <CarouselItem
                                key={index}
                                className="flex items-center justify-center"
                            >
                                <React.Fragment key={index}>
                                    <Project
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        gitURL={project.gitURL}
                                        liveDemo={project.liveDemo}
                                        details={project.details}
                                        date={project.date}
                                        imageUrl={project.imageUrl}
                                    />
                                </React.Fragment>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        size="sm"
                        className="hidden md:block bg-transparent"
                    />
                    <CarouselNext className="hidden md:block bg-transparent" />
                </Carousel>
                <div className="text-center text-sm text-muted-foreground">
                    Project {current} of {count}
                </div>
            </div>
            {/* {maxProject >= projectsData.length ? (
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
            )} */}
        </section>
    );
}
