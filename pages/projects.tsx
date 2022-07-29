import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { DSProjects, SEProjects } from "../components/projects/Project";
import ProjectCard from "../components/projects/ProjectCard";
import DarkModeToggle from "../components/theme/DarkModeToggle";

const ProjectPage: NextPage = () => {
  const [type, setType] = useState("ds");
  const isDataScience = type === "ds";

  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo title="Projects" />

      <header className="flex flex-col items-center mt-16">
        <h1 className="text-4xl font-bold font-poppins uppercase mb-4">
          Projects
        </h1>
        <div className="flex space-x-2 md:space-x-5">
          <div
            className={`hover:text-link hover:cursor-pointer ${
              isDataScience && "underline font-semibold"
            }`}
            onClick={() => setType("ds")}
          >
            Data Science
          </div>
          <div
            className={`hover:text-link hover:cursor-pointer ${
              !isDataScience && "underline font-semibold"
            }`}
            onClick={() => setType("se")}
          >
            Software Engineering
          </div>
        </div>
      </header>

      <main className="container mx-auto flex flex-grow mt-8">
        {isDataScience ? <DSProjects /> : <SEProjects />}
      </main>

      <footer className="flex px-4 md:px-8 py-4 justify-center lg:justify-end">
        <DarkModeToggle />
      </footer>
    </div>
  );
};

export default ProjectPage;
