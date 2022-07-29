import ProjectCard from "./ProjectCard";

const ds = [
  {
    title: "FisioMotion",
    detail: "Ongoing, RISTEK Fasilkom UI",
    description:
      "Developing a motion scoring system to help user in performing physiotherapy exercises. The system utilizes a production model of Google's PoseNet for pose estimation and engineered for scoring similarity and counting movement repetitions.",
    tags: ["Pose Estimation", "Flutter", "KNN"],
    links: [
      //   {
      //     name: "GitHub",
      //     url: "",
      //   },
    ],
    image: "/images/projects/fisiomotion.png",
  },
  {
    title: "PanSos for PMB Fasilkom UI 2022",
    detail: "Ongoing, Ristek Fasilkom UI",
    description:
      "Developing a hybrid (content-based and collaborative) reccomendation system to help match freshmen college students entering Fasilkom UI. The recommendation system utilizes a modified LightFM deployment to account for the reciprocity of the system.",
    tags: ["Hybrid RecSys", "Reciprocral RecSys", "LightFM"],
    links: [
      {
        name: "Website",
        url: "https://pmb.cs.ui.ac.id",
      },
      {
        name: "News (UI)",
        url: "https://www.ui.ac.id/pansos-platform-media-sosial-mahasiswa-fasilkom-ui/",
      },
      {
        name: "News (Liputan6)",
        url: "https://www.liputan6.com/tekno/read/4671004/ui-bikin-medsos-pansos-untuk-pembinaan-mahasiswa-baru",
      },
    ],
    image: "/images/projects/pansos.png",
  },
  {
    title: "Age Estimation & Gender Classification From Face Photos",
    detail:
      "Champion of Pusat Prestasi Nasional's SatriaData Big Data Challenge 2021",
    description:
      "Developed a new pipeline for age estimation & gender classification from photos extracted from social media. As required, the pipeline does not use pretrained model and involves face detection alignment and an estimator trained using multi-task learning.",
    tags: [
      "Multi-task learning",
      "Age Estimation",
      "Gender Classification",
      "Face Detection",
    ],
    links: [
      {
        name: "Online Demo",
        url: "https://ekojsalim.github.io/satriadata-demo/#/",
      },
      {
        name: "Slides",
        url: "https://docs.google.com/presentation/d/1dBjUejNkJMjeWZwXnU69cMraoFy2qfQksqTl0skX4JI/edit?usp=sharing",
      },
    ],
    image: "/images/projects/satriadata.png",
  },
  {
    title: "Patch-ifying ResNet",
    detail: "Final Project for Machine Learning CSCE604235",
    description:
      "Conducted an experiment to study the effectiveness of replacing the usual convolutional stem of ResNet with a patch-based stem. As demonstrated by ConvNext, the experiment found that the patch-based stem is slightly better.",
    tags: ["Patches", "CNN", "Image Classification"],
    links: [
      {
        name: "Online Demo",
        url: "https://huggingface.co/spaces/ekojs/ml_food10",
      },
      {
        name: "Slides",
        url: "https://drive.google.com/file/d/1qIwkv4PWOXLIRXDHjwxwwWD3096ZYMK9/view?usp=sharing",
      },
      {
        name: "Notebook & Data",
        url: "https://drive.google.com/drive/folders/10OkVddeVT85PO2dW5y7AoKs2y_Au8pIJ?usp=sharing",
      },
    ],
    image: "/images/projects/f101.png",
  },
  {
    title: "Flood Tweet Processing & Classification",
    detail:
      "Silver Medalist at Pusat Prestasi Nasional's Gemastik 2020 Data Mining Competition",
    description:
      "Developed a multimodal and semisupervised model for identifying useful/informative tweets during a flood disaster. The model was trained on both image and textual data and was further improved upon by an unlabled set of data using semisupervised learning.",
    tags: ["Semi-supervised learning", "Multimodal learning"],
    links: [
      {
        name: "Paper",
        url: "/docs/projects/gemastik.pdf",
      },
    ],
    image: "/images/projects/gemastik.png",
  },
];

export const DSProjects = () => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {ds.map((project, index) => {
        return <ProjectCard key={index} info={project} />;
      })}
    </div>
  );
};

const se = [
  {
    title: "AjaibDeX",
    detail:
      "Project for Software Engineering Project Course - CSCM603228 in collaboration with Ajaib",
    description:
      "Developed a React Native based application for decentralized crypto exchange. The application works on the Binance Smart Chain and provides a wallet, portfolio tracker, fiat onramp and decentralized exchange through PancakeSwap.",
    tags: [
      "React Native",
      "ethers.js",
      "Crypto",
      "Binance Smart Chain",
      "PancakeSwap",
    ],
    links: [
      {
        name: "Video",
        url: "https://www.youtube.com/watch?v=LR4He1qGGu4&t=1s",
      },
      {
        name: "Presentation",
        url: "https://pitch.com/public/9c3d14c6-34b4-4787-b914-556871686779",
      },
    ],
    image: "/images/projects/ajaibdex.png",
  },
  {
    title: "COMPFEST 13 Playground",
    detail: "COMPFEST 13 - Manager of IT Development",
    description:
      "Developed a 3D Virtual World based on a custom build of Mozilla Hubs for COMPFEST 13's Playground. The world allows user to interactively visit booths and complete tasks to gain points.",
    tags: ["Virtual Reality", "Three.js", "Phoenix", "React", "Mozilla Hubs"],
    links: [
      {
        name: "Landing Page (Cached)",
        url: "https://cf13.compfest.id/playground",
      },
    ],
    image: "/images/projects/playground.png",
  },
  {
    title: "COMPFEST 13",
    detail: "COMPFEST 13 - Manager of IT Development",
    description:
      "Led the rewrite of COMPFEST website for its 13th edition involving the switch to new architecture and new design.",
    tags: ["Next.js", "GraphQL", "Hasura", "AWS"],
    links: [
      {
        name: "Website (Cached)",
        url: "https://cf13.compfest.id/",
      },
    ],
    image: "/images/projects/compfest13.jpg",
  },
  {
    title: "COMPFEST 12",
    detail: "COMPFEST 12 - Web Developer",
    description:
      "Developed landing pages, registration website, and 'playground' for COMPFEST 12.",
    tags: ["Gatsby", "Django"],
    links: [
      {
        name: "Website (Cached)",
        url: "https://cf12.compfest.id/",
      },
    ],
    image: "/images/projects/compfest12.jpg",
  },
  {
    title: "BETIS Online learning Platform",
    detail: "BETIS Fasilkom UI - Tech Lead",
    description:
      "Developed an online learning platform for BETIS Fasilkom UI to help disadvantaged youths in preparing for their national college entrance exams. The website features an interactive quiz system and feedback system in support of the classes usually held by BETIS.",
    tags: ["Next.js", "GraphQL"],
    links: [
      {
        name: "Website",
        url: "https://betis.cs.ui.ac.id/",
      },
    ],
    image: "/images/projects/betis.png",
  },
];

export const SEProjects = () => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {se.map((project, index) => {
        return <ProjectCard key={index} info={project} />;
      })}
    </div>
  );
};
