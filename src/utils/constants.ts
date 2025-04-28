import { FaComputer } from "react-icons/fa6";
import { CARDSKILLS } from "./icons";
import { SiJavascript, SiNestjs, SiSwagger, SiTypescript } from "react-icons/si";
import { DiDocker, DiMongodb, DiPostgresql, DiReact } from "react-icons/di";
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

interface IMenu {
    name: string;
    link: string;
}

export const MENU: IMenu[] = [
    {
        name: "Inicio",
        link: "#home",
    },
    {
        name: "Proyectos",
        link: "#project",
    },
    {
        name: "Experiencia",
        link: "#experience",
    },
    {
        name: "Habilidades",
        link: "#skills",
    },
    {
        name: "Sobre mí",
        link: "#about",
    },
    {
        name: "Contácteme",
        link: "#contact",
    }
];

export const PHRASES: string[] = [
    " Desarrollador de Software.",
    " Desarrollador FullStack.",
    " Ingeniero en Tecnologías de la Información.",
];

export const OPTIONFORM = [
    {
        name: "username",
        placeholder: "Saul Goodman",
        title: "Nombre",
    },
    {
        name: "email",
        placeholder: "sauljp12@email.com",
        title: "Email",
    },
    {
        name: "message",
        placeholder: "Estimado...",
        title: "Mensaje",
    },
];



export const CARDITEMS: {
    title: string;
    description: string;
    image: string;
    nameSkills: keyof typeof CARDSKILLS;
    pageLink: string;
    repositoryLink?: string;
}[] = [
        {
            title: "DeOne",
            description:
                "Deone es una plataforma de compra y venta en línea que ofrece productos artecanales hecho en Esmeraldas, Ecuador.",
            image: "/deone.png",
            nameSkills: "deone",
            pageLink: "https://deone-qa.vercel.app/",
        },
        {
            title: "GifExpert",
            description:
                "GifExpert es una página web que busca cualquier gif de cualquier tema de interés.",
            image: "/page-gif.png",
            nameSkills: "gifexpert",
            pageLink: "https://jeffersons69.github.io/GifExpert-React/",
            repositoryLink: "https://github.com/JeffersonS69/GifExpert-React",
        },
    ];



export const ITEMSEXPERIENCE = [
    {
        nameCompany: "Vitio Latam",
        position: "Desarrollador Backend",
        date: "DIC 2024 | ACTUALIDAD",
        description: "Diseño e implemento soluciones escalables bajo una arquitectura de microservicios, optimizando la interoperabilidad y la mantenibilidad de los sistemas.",
        skills: [
            {
                name: "TypeScript",
                icon: SiTypescript
            },
            {
                name: "NestJS",
                icon: SiNestjs
            },
            {
                name: "Docker",
                icon: DiDocker
            },
            {
                name: "Swagger",
                icon: SiSwagger
            },
            {
                name: "PostgreSQL",
                icon: DiPostgresql
            },
            {
                name: "MongoDB",
                icon: DiMongodb
            }
        ],
        color: "violet",
        imagen: "https://media.licdn.com/dms/image/v2/D4E0BAQE8xcpSK14Afg/company-logo_100_100/company-logo_100_100/0/1721185511360/vitio_latam_logo?e=1750896000&v=beta&t=QtfB2jxo77Bw3paw46NqRN7s_BIbSRGRqYkHi6BIfT0"
    },
    {
        nameCompany: "IESS",
        position: "Auxiliar de soporte de TI",
        date: "AGO 2024 | OCT 2024",
        description:
            "Brinde asistencia a los empleados para resolver problemas técnicos relacionado con software, hardware, y sistemas internos.",
        skills: [
            {
                name: "Servicios técnicos",
                icon: MdOutlineMiscellaneousServices
            },
            {
                name: "Mantenimiento y reparaciones",
                icon: FaComputer
            },
        ],
        color: "gray",
        imagen: "https://media.licdn.com/dms/image/v2/C4E0BAQHTIfMWEZjzHQ/company-logo_100_100/company-logo_100_100/0/1631325191633?e=1750896000&v=beta&t=OKGxnfc6ZoPsc4xCXYned_OJiJb8Q0V46rtB8kAUi2c"
    },
    {
        nameCompany: "WOOWTECHNOLOGYSAS",
        position: "Desarrollador FullStack",
        date: "MAR 2024 | AGO 2024",
        description:
            "Encargado de desarrollar micro-servicios e interfaces de usuario para aplicaciones móviles.",
        skills: [
            {
                name: "TypeScript",
                icon: SiTypescript
            },
            {
                name: "Docker",
                icon: DiDocker
            },
            {
                name: "React Native",
                icon: TbBrandReactNative
            },
            {
                name: "Node.js",
                icon: FaNodeJs
            },
            {
                name: "PostgreSQL",
                icon: DiPostgresql
            },
            {
                name: "MongoDB",
                icon: DiMongodb
            }
        ],
        color: "teal",
        imagen: "https://media.licdn.com/dms/image/v2/D4E0BAQGBG3fy1o2hzQ/company-logo_100_100/company-logo_100_100/0/1719256915843?e=1750896000&v=beta&t=7-yVzgkOfkZ4euTPjq8Stg_SYerMs_sF5kaszWmkpxE"
    },
    {
        nameCompany: "Pucese",
        position: "Desarrollador Frontend",
        date: "FEB 2023 | OCT 2023",
        description:
            "Trabajé desarrollando un nuevo intranet para la universidad, encargado en la creación de interfaces de usuario para solicitar permisos especiales a los trabajadores y administrar aulas para los docentes.",
        skills: [
            {
                name: "JavaScript",
                icon: SiJavascript
            },
            {
                name: "React",
                icon: DiReact
            },
            {
                name: "Node.js",
                icon: FaNodeJs
            }
        ],
        color: "sky",
        imagen: "https://media.licdn.com/dms/image/v2/D4E0BAQGiwYqFctenFw/company-logo_100_100/company-logo_100_100/0/1719256936262/puceesmeraldas_logo?e=1750896000&v=beta&t=pagQN7gcsjUifBKanaCHcya0sNzziIjoc7KUsYSsyBU"
    },
];