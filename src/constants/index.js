import { marriott, plasma, gmu, nasm } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    books,
    racecar,
    tracker,
    celebrate,
    terraform,
    java,
    python,
    kubernetes,
    pytorch,
    aws,
    figma
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },

    {
        imageUrl: terraform,
        name: "Terraform",
        type: "Cloud",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
        {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
        {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Cloud",
    },
        {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "ML",
    },
        {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
];

export const experiences = [
    {
        title: "Cloud Engineering Intern",
        company_name: "Marriott",
        icon: marriott,
        iconBg: "#9b1708",
        date: "May 2024 - Aug 2025",
        points: [
            "Led cloud migration from single-region OpenShift setup to dual-region AliCloud ACK clusters. Automated deployment of 2 Kubernetes clusters, 3 microservices, and 6-node Couchbase clusters using Terraform, Ansible, and CI/CD pipelines. Executed 5-phase DNS-based traffic cutover achieving 100% production traffic migration with minimal downtime.",
            "Contributed to Partner Integration through API development for seven partners. Delivered Postman API collections enabling secure access to Token, Member Profile, Account Linking, and Points Transfer (Earn/Redemption) APIs. Led partner testing queries and full-cycle API integration including error handling (HTTP 5xx, 429) and security compliance.",
        ],
    },
    {
        title: "Researcher",
        company_name: "Columbia Plasma Physics Lab",
        icon: plasma,
        iconBg: "#ffffff",
        date: "Aug 2024 - Present",
        points: [
            "Conducted research on predictive modeling of pedestal height and width in ELM-free spherical tokamaks to support future fusion reactor design.",
            "Curated and analyzed over 500 experimental discharges from NSTX-U and MAST-U, writing custom Python scripts for data parsing, profile fitting, and empirical scaling validation.",
            "Applied and benchmarked Tokamak edge codes, resulting in preliminary models that reduce pedestal height uncertainty by ~30% in ST projections",
        ],
    },
    {
        title: "Museum Aide",
        company_name: "Smithsonian National Air and Space Museum",
        icon: nasm,
        iconBg: "#ffffff",
        date: "May 2021 - Aug 2023",
        points: [
            "Presented experiments and stories at discovery stations on topics including the Space Suit (EMU), Living and Working in Space, Principles of Flight, and space exploration for hundreds of visitors daily",
            "Edited and wrote story outlines and lesson plans for Discovery Stations.",
        ],
    },
    {
        title: "Researcher",
        company_name: "George Mason University",
        icon: gmu,
        iconBg: "#035f1a",
        date: "May 2021 - Dec 2022",
        points: [
            "Produced time-series visualizations of climate data to investigate the impacts of rapid climate change on the biodiversity in the Arctic",
            "Projected warming trend of land surface and soil temperature. This study provided an important case for the Soil-Ecosystem-Carbon-Climate Nexus Initiative.",
            "Edited published textbook with research findings:“Climate Change and a Sustainable Earth” by Dr. John Qu.",
            "Abstract Publication and Poster Discussion at the American Geophysical Union Fall Conference.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jennaacai',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jenna-cai-b875381bb/',
    }
];

export const projects = [
    {
        iconUrl: books,
        theme: 'btn-back-oat',
        name: 'BookMatch - Semantic Book Recommender',
        description: `Built an interactive, end-to-end book recommendation system using LLMs, vector search, and zero-shot classification. 
        Cleaned and processed a Kaggle books dataset with Pandas, engineered embeddings using OpenAI’s
        embedding API via LangChain, and stored them in a Chroma vector database to enable semantic similarity search. 
        Applied zero-shot text classification and sentence-level sentiment analysis using Hugging Face Transformers to categorize 
        and tag books by genre and emotional tone. Deployed a fully functional Gradio dashboard allowing users to filter 
        recommendations by emotion and category, with real-time LLM-powered search and thumbnail rendering.`,
        repoLink: 'https://github.com/jennaacai/bookmatch-book-recommender',
    },
    {
        iconUrl: racecar,
        theme: 'btn-back-sky',
        name: 'F1 RAG Chatbot',
        description: `Developed a full-stack Retrieval-Augmented Generation (RAG) chatbot 
        that delivers up-to-date Formula 1 insights by integrating OpenAI’s GPT-4 with a vector 
        database (DataStax Astra DB). Built custom web scraping and embedding pipelines using Puppeteer 
        and LangChain.js, and deployed the frontend with Next.js and Vercel’s AI SDK for a responsive, real-time chat experience. 
        Engineered both backend and frontend workflows to transform unstructured web content into semantically enriched, searchable context 
        for LLM responses.`,
        liveLink: 'https://jenna-f1gpt.vercel.app/',
        repoLink: 'https://github.com/jennaacai/f1gpt'
    },
    {
        iconUrl: tracker,
        theme: 'btn-back-lilac',
        name: 'Subscription Tracker API',
        description: `Developed and deployed a secure, production-grade REST API using Node.js, Express.js, 
        and MongoDB, featuring JWT-based user authentication and global error handling. Integrated Arcjet for bot
        protection and rate limiting, and built workflow automation with Upstash to send dynamic email reminders for subscription renewals. 
        Engineered robust database models, middleware, and API routes following RESTful conventions`,
        repoLink: 'https://github.com/jennaacai/subscription_service_tracker',
    },
    {
        iconUrl: celebrate,
        theme: 'btn-back-rose',
        name: 'Personal Website',
        description: `Developed a responsive 3D portfolio website using React.js, Three.js, and Tailwind CSS, 
        showcasing interactive scenes and animated models with React Three Fiber. 
        Implemented dynamic page routing and custom UI components for user engagement. 
        Demonstrated frontend proficiency through modular component structuring, custom alert systems, background audio controls, 
        and production deployment `,
        liveLink: 'https://jenna-cai-portfolio.netlify.app/',
    },

];