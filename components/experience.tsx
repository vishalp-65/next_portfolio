"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData, experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { CiLocationOn } from "react-icons/ci";

export default function Experience() {
    const { ref } = useSectionInView("Timeline");
    const { theme } = useTheme();

    return (
        <section
            id="timeline"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>Experience & Education</SectionHeading>
            <VerticalTimeline lineColor="">
                <React.Fragment>
                    {experiencesData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light"
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                            visible={true}
                        >
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-5">
                                <p className="flex items-center gap-2 font-normal !mt-1">
                                    <CiLocationOn />
                                    {item.location}
                                </p>
                                <p className="!mt-1 items-center !font-normal text-gray-700 dark:text-white/75">
                                    {item.experience}
                                </p>
                            </div>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                    {educationData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light"
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                            visible={true}
                        >
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="flex items-center gap-2 font-normal !mt-0">
                                <CiLocationOn />
                                {item.location}
                            </p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.collageName}
                            </p>
                            <p className="flex items-center !mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.grade}
                                <span className="italic ml-1"> CGPA</span>
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </React.Fragment>
            </VerticalTimeline>
        </section>
    );
}
