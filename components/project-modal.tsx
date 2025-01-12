import { useModalContext } from "@/context/modalContext";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaFirefoxBrowser, FaGithub } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import Tags from "./tags";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

type Props = {};

const ProjectModal = (pros: Props) => {
    const { isModalOpen, setIsModalOpen, data } = useModalContext();
    const { title, tags, gitURL, liveDemo, details, date, demoImg } = data;

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen, data]);

    return (
        <>
            <dialog className="fixed left-0 top-0 p-2 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div
                    className="bg-white rounded-lg border border-gray-300 dark:border-gray-600 m-auto p-4 pt-4 relative 
                max-w-[60rem] md:min-w-[50rem] min-h-[25rem] max-h-full dark:bg-gray-900 dark:text-white shadow-md drop-shadow-lg overflow-hidden"
                >
                    <div className="sm:flex sm:flex-col sm:items-start sm:justify-between md:flex-row md:items-start md:justify-between mt-4 h-full">
                        <div
                            className="md:w-1/4 sm:gap-3 sm:w-full md:gap-3 sm:h-auto md:min-h-[30rem] md:max-h-full sm:flex-row sm:items-start 
                                sm:justify-between md:flex md:flex-col md:items-start md:justify-between shadow-md drop-shadow-md z-30
                                bg-gray-100 dark:bg-gray-800 dark:text-white p-4 rounded-md overflow-x-auto"
                        >
                            <p className="text-3xl font-bold">{title}</p>
                            <p className="text-sm italic my-1.5 md:my-0">
                                {date}
                            </p>
                            <div className="flex flex-col justify-around gap-3">
                                <div className="flex items-center gap-3">
                                    <a href={gitURL} target="_blank">
                                        <p className="flex items-center gap-2 text-sm">
                                            GitHub{" "}
                                            <FaGithub className="text-base" />{" "}
                                        </p>
                                    </a>
                                    {liveDemo && (
                                        <a href={liveDemo} target="_blank">
                                            <p className="flex items-center gap-2 text-sm">
                                                URL{" "}
                                                <FaFirefoxBrowser className="text-base" />{" "}
                                            </p>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <Tags tags={tags} more={false} />
                        </div>

                        <div className="md:w-3/4 sm:w-full ml-2 max-h-[35rem] h-full p-3 no-scrollbar overflow-y-auto">
                            <div className="w-full h-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center gap-3 justify-center rounded-md">
                                <Swiper
                                    modules={[Pagination, Scrollbar, A11y]}
                                    spaceBetween={20}
                                    slidesPerView={"auto"}
                                    pagination={{ clickable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    className="w-full h-full"
                                >
                                    {demoImg.map((img: any, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className="flex items-center justify-center h-full"
                                        >
                                            <div className="relative w-[250] h-[200px] md:h-[300px]">
                                                <Image
                                                    src={img}
                                                    alt="title"
                                                    fill
                                                    className="object-contain rounded-lg drop-shadow-sm"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="mt-3 p-0 md:p-1">
                                <ul className="list-disc pl-5">
                                    {details.map((detail, index) => (
                                        <li
                                            key={index}
                                            className="text-justify pt-2 dark:text-gray-300"
                                        >
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button
                        className="absolute -top-2 -right-2 p-2.5"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <IoCloseCircleOutline className="h-8 w-8" />
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default ProjectModal;
