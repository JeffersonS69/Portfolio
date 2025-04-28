import { JSX } from "react";
import Home from "@/components/sections/home";
import Project from "@/components/sections/project";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

interface ISection {
    id: string;
    style: string;
    component: () => JSX.Element;
}

export const SECTIONS: ISection[] = [
    {
        id: "home",
        style: "h-screen flex flex-col items-center justify-center p-6 text-center",
        component: Home,
    },
    {
        id: "project",
        style:
            "h-auto xl:h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-zinc-900 text-center overflow-hidden",
        component: Project,
    },
    {
        id: "experience",
        style:
            "h-auto flex flex-col items-center justify-center py-20 px-6 bg-white dark:bg-black text-center",
        component: Experience,
    },
    {
        id: "skills",
        style:
            "h-screen flex flex-col items-center justify-center p-6 bg-zinc-200 dark:bg-zinc-950 text-center",
        component: Skills,
    },
    {
        id: "about",
        style:
            "h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-black text-center",
        component: About,
    },
    {
        id: "contact",
        style:
            "h-screen flex flex-col items-center justify-center p-6 bg-zinc-200 dark:bg-zinc-950 text-center",
        component: Contact,
    },
];