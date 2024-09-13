"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 mb-28 flex flex-col items-center"
        >
            <SectionHeading>My projects</SectionHeading>
            <div className="w-full bg-gray-100 dark:bg-gray-900 max-w-[23rem] md:max-w-[40rem] lg:max-w-[1200px] flex flex-col items-center gap-3 justify-center rounded-md">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1} // Start with one slide for mobile
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 slide on small screens
                        },
                        768: {
                            slidesPerView: 1, // 2 slides on medium screens
                        },
                        1024: {
                            slidesPerView: 2, // 3 slides on large screens
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="w-full"
                >
                    {projectsData.map((project: any, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <div className="w-full">
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                    gitURL={project.gitURL}
                                    liveDemo={project.liveDemo}
                                    details={project.details}
                                    date={project.date}
                                    imageUrl={project.imageUrl}
                                    demoImg={project.demoImg}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
