import { CARDSKILLS } from "./icons";

export const MENU = [
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

export const PHRASES = [
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
