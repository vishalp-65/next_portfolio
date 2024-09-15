"use client";

import React, { FormEvent, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
            toast.error(error);
            return;
        }
        toast.success("Email sent successfully!");
        formRef.current?.reset(); // Reset the form
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await handleSubmit(formData);
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:vishal65.p@gmail.com">
                    vishal65.p@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                ref={formRef}
                className="mt-10 flex flex-col dark:text-black w-full"
                onSubmit={handleFormSubmit}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack bg-gray-200 bg-opacity-70 dark:bg-gray-600 dark:bg-opacity-50 dark:focus:bg-opacity-100 transition-all 
                    dark:outline-none dark:text-white"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 bg-gray-200 bg-opacity-70 dark:bg-gray-600 dark:bg-opacity-50 
                    dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-white"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <div className="flex items-center justify-center mt-3">
                    <SubmitBtn />
                </div>
            </form>
        </motion.section>
    );
};

export default React.memo(Contact);
