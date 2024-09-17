"use client";

import React, { useMemo } from "react";
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

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);
    console.log("project render");

    const memoizedProjects = useMemo(
        () =>
            projectsData.map((project: any, index) => (
                <SwiperSlide
                    key={index}
                    className="flex items-center justify-center"
                >
                    <div className="w-full">
                        <Project
                            projectData={project} // Pass projectData as a single object
                            lazy={true} // Pass lazy prop if used for conditional image loading
                        />
                    </div>
                </SwiperSlide>
            )),
        []
    );

    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 mb-28 flex flex-col items-center"
        >
            <SectionHeading>My projects</SectionHeading>
            <div
                className="w-full bg-gray-100 dark:bg-gray-900 max-w-[24rem] md:max-w-[50rem] lg:max-w-[1200px] flex flex-col 
                items-center gap-3 justify-center rounded-md"
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]} // Include Lazy module
                    spaceBetween={30}
                    slidesPerView={1} // Start with one slide for mobile
                    pagination={{ clickable: true }}
                    watchSlidesProgress={true} // For lazy loading to work properly
                    breakpoints={{
                        768: {
                            slidesPerView: 1, // 1 slide on medium screens
                        },
                        1024: {
                            slidesPerView: 2, // 2 slides on large screens
                        },
                    }}
                    className="w-full"
                >
                    {memoizedProjects}
                </Swiper>
            </div>
        </section>
    );
};

export default React.memo(Projects);
