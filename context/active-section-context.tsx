"use client";

import React, {
    useState,
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useMemo,
} from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    const contextValue = useMemo(
        () => ({
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }),
        [activeSection, timeOfLastClick]
    );

    return (
        <ActiveSectionContext.Provider value={contextValue}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return context;
}
