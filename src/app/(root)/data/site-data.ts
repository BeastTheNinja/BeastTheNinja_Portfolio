export type Project = {
    name: string;
    summary: string;
    stack: string[];
    demoUrl?: string;
    repoUrl?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        name: "SustainableIsland2026",
        summary: "To ugers projekt med island og spanien, hvor vi skulle lave en app for noget global goals relateret. sponsorert af Erasmus+",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "docker", "prismadb", "postgreSQL"],
        demoUrl: "https://www.water-calculator.space/",
        repoUrl: "https://github.com/JonathanTWD/SustainableIsland2026",
        featured: true,
    },
    {
        name: "History_Site",
        summary: "En lille historie side med timeline.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        demoUrl: "https://beasthistorysite.netlify.app/",
        repoUrl: "https://github.com/BeastTheNinja/History_Site",
        featured: true,
    },
    {
        name: "Calculator_App",
        summary: "En simpel og minimalt designet lommeregner.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        demoUrl: "https://lommeregnerapp.netlify.app/",
        repoUrl: "https://github.com/BeastTheNinja/Calculator_App",
        featured: true,
    },
    {
        name: "Project_Store_Front",
        summary: "En simpel og minimalt designet frontend til en projekt butik, hvor brugere kan se og købe projekter.",
        stack: ["HTML5", "JavaScript", "SCSS",],
        demoUrl: "https://beasttheninja.github.io/Project_Store_Front/",
        repoUrl: "https://github.com/BeastTheNinja/Project_Store_Front",
        featured: false,
    },
    {
        name: "ToDoAppTDA",
        summary: "første projekt i min portfolio, en simpel todo app med fokus på funktionalitet og minimalisme.",
        stack: ["HTML5", "JavaScript", "SCSS"],
        demoUrl: "https://todoapptda.netlify.app/",
        repoUrl: "https://github.com/BeastTheNinja/ToDoAppTDA",
        featured: false,
    },
];

export const contactLinks = [
    { label: "GitHub", href: "https://github.com/BeastTheNinja" },
];

export const contactEmail = "mailto:sebastianlarsen21@outlook.com";
export const contactPhone = "tel:+45 42 83 00 12";