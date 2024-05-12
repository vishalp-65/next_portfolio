import React from "react";

type Props = {
    tags: string[];
    more: boolean;
};

const Tags = (props: Props) => {
    return (
        <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
            {props.tags.map((tag, index) => (
                <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                >
                    {tag}
                </li>
            ))}
            {props.more && (
                <p className="px-2 rounded border-gray-500 text-gray-500">
                    ...
                </p>
            )}
        </ul>
    );
};

export default Tags;
