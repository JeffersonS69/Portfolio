import { FaAws, FaCss3Alt, FaDocker, FaGithub, FaGitlab, FaGitSquare, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoPostgresql, BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase, IoLogoJavascript, IoLogoVercel } from 'react-icons/io5';
import { SiDbeaver, SiExpress, SiPrisma, SiRabbitmq, SiTypescript, SiVite } from "react-icons/si";
import { LuCloudCog } from "react-icons/lu";
import { DiCss3, DiHtml5, DiJavascript, DiVisualstudio } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";

export const SKILLS = {
    frontend: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: RiNextjsFill },
        { name: "TypeScript", icon: BiLogoTypescript },
        { name: "Tailwind CSS", icon: RiTailwindCssFill },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "Redux", icon: BiLogoRedux },
    ],
    backend: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: BiLogoMongodb },
        { name: "PostgreSQL", icon: BiLogoPostgresql },
        { name: "Firebase", icon: IoLogoFirebase },
        { name: "RabbitMQ", icon: SiRabbitmq },
        { name: "REST API", icon: LuCloudCog },
        { name: "Prisma", icon: SiPrisma },
    ],
    tools: [
        { name: "Git", icon: FaGitSquare },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: DiVisualstudio },
        { name: "Docker", icon: FaDocker },
        { name: "Dbeaver", icon: SiDbeaver },
        { name: "Vercel", icon: IoLogoVercel },
        { name: "AWS", icon: FaAws },
        { name: "CI/CD", icon: VscAzureDevops },
    ],
};

export const CARDSKILLS = {
    deone: [
        {
            name: "Typescript",
            icon: SiTypescript,
        },
        {
            name: "Next.js",
            icon: RiNextjsFill,
        },
        {
            name: "Tailwind CSS",
            icon: RiTailwindCssFill,
        },
        {
            name: "Firebase",
            icon: RiFirebaseFill,
        },
        {
            name: "Vercel",
            icon: RiVercelFill,
        },
        {
            name: "Gitlab",
            icon: FaGitlab,
        },
    ],
    gifexpert: [
        {
            name: "Javascript",
            icon: DiJavascript,
        },
        {
            name: "Vite",
            icon: SiVite,
        },
        {
            name: "React",
            icon: FaReact,
        },
        {
            name: "Html",
            icon: DiHtml5,
        },
        {
            name: "Css",
            icon: DiCss3,
        },
        {
            name: "Node.js",
            icon: FaNodeJs,
        },
        {
            name: "Express",
            icon: SiExpress,
        },
    ],
}