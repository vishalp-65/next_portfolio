"use client";

import React, {
    useState,
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";
import { dataType } from "@/lib/types";

type ModalContextProviderProps = {
    children: React.ReactNode;
};

type ModalContextType = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    data: dataType;
    setData: Dispatch<SetStateAction<dataType>>;
};

export const ModalSectionContext = createContext<ModalContextType | null>(null);

const defaultValue = {
    title: "",
    description: "",
    tags: [],
    gitURL: "",
    liveDemo: "",
    details: [],
    date: "",
    imageUrl: "",
    demoImg: [],
};

export default function ModalContextProvider({
    children,
}: ModalContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [data, setData] = useState<dataType>(defaultValue);

    return (
        <ModalSectionContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                data,
                setData,
            }}
        >
            {children}
        </ModalSectionContext.Provider>
    );
}

export function useModalContext() {
    const context = useContext(ModalSectionContext);

    if (context === null) {
        throw new Error(
            "useModalContext must be used within an ModalContextProvider"
        );
    }

    return context;
}
