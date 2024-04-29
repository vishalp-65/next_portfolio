import { useModalContext } from "@/context/modalContext";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaFirefoxBrowser, FaGithub } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

type Props = {};

const ProjectModal = (pros: Props) => {
    const { isModalOpen, setIsModalOpen, data } = useModalContext();
    const { title, tags, gitURL, liveDemo, details, date } = data;

    useEffect(() => {
        console.log("data:", data);
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <>
            <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white rounded-lg border border-gray-500 m-auto p-8 relative w-[45rem] min-h-[22rem] dark:bg-gray-900 dark:text-white">
                    <div className="flex items-start justify-between mt-3">
                        <div className="w-1/3 gap-3 h-full flex flex-col items-start justify-between bg-gray-100 dark:bg-gray-700 dark:text-white p-1 rounded-md">
                            <p className="text-3xl font-bold">{title}</p>
                            <p className="text-base italic">{date}</p>
                            <div className="flex flex-col justify-around gap-3">
                                <div className="flex items-center gap-3">
                                    <a href={gitURL} target="_blank">
                                        <p className="flex items-center gap-1">
                                            GitHub <FaGithub />{" "}
                                        </p>
                                    </a>
                                    {liveDemo && (
                                        <a href={liveDemo} target="_blank">
                                            <p className="flex items-center gap-1">
                                                URL <FaFirefoxBrowser />{" "}
                                            </p>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
                                {tags.map((tag, index) => (
                                    <li
                                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-2/3 ml-2">
                            {details.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute top-0 right-0 p-3"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <IoCloseCircleOutline className="h-6 w-6" />
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default ProjectModal;
