import { useModalContext } from "@/context/modalContext";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaFirefoxBrowser, FaGithub } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import Tags from "./tags";

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
                <div className="bg-white rounded-lg border border-gray-500 m-auto p-4 pt-4 relative w-[45rem] min-h-[22rem] dark:bg-gray-900 dark:text-white">
                    <div className="sm:flex sm:flex-col sm:items-start sm:justify-between md:flex-row md:items-start md:justify-between mt-4">
                        <div
                            className="md:w-1/3 sm:w-full md:gap-3 sm:h-auto md:h-[19rem] sm:gap-3 sm:flex-row sm:items-start 
                                sm:justify-between md:flex md:flex-col md:items-start md:justify-between 
                                bg-gray-100 dark:bg-gray-700 dark:text-white p-4 rounded-md overflow-x-auto"
                        >
                            <p className="text-3xl font-bold">{title}</p>
                            <p className="text-sm italic">{date}</p>
                            <div className="flex flex-col justify-around gap-3">
                                <div className="flex items-center gap-3">
                                    <a href={gitURL} target="_blank">
                                        <p className="flex items-center gap-2 text-sm">
                                            GitHub <FaGithub />{" "}
                                        </p>
                                    </a>
                                    {liveDemo && (
                                        <a href={liveDemo} target="_blank">
                                            <p className="flex items-center gap-2 text-sm">
                                                URL <FaFirefoxBrowser />{" "}
                                            </p>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <Tags tags={tags} more={false} />
                        </div>
                        <div className="md:w-2/3 sm:w-full ml-2 h-[19rem] p-3 no-scrollbar overflow-y-auto">
                            {details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute top-0 right-0 p-2"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <IoCloseCircleOutline className="h-7 w-7" />
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default ProjectModal;
