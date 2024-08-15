"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import ProjectModal from "@/components/project-modal";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useModalContext } from "@/context/modalContext";

export default function Home() {
    const { isModalOpen } = useModalContext();

    return (
        <main className="flex flex-col items-center px-2">
            <Intro />
            <SectionDivider />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            {isModalOpen && <ProjectModal />}
        </main>
    );
}
