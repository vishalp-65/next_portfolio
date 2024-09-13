import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface dataType {
    title: string;
    description: string;
    tags: string[]; // Specify array type here
    gitURL: string;
    liveDemo: string;
    details: string[]; // Specify array type here
    date: string;
    imageUrl: string;
    demoImg: [];
}
