import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import PerlinBlob from "../components/3d/PerlinBlob";
import HomeLink from "../components/home/HomeLink";
import DarkModeToggle from "../components/theme/DarkModeToggle";

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <NextSeo title="Home" />

      <main className="flex-grow flex flex-col lg:flex-row lg:justify-center items-center">
        <div className="flex flex-col w-screen h-[70vh] md:h-[80vh] lg:h-[90vh] lg:w-[50vw] hover:cursor-grab active:cursor-grabbing">
          <PerlinBlob />
          <div className="hidden lg:block text-center font-light italic">
            <p>What seperates signal from noise?</p>
            <p>
              3D point cloud with{" "}
              <a
                href="https://github.com/stegu/psrdnoise/"
                className="hover:underline hover:cursor-pointer hover:text-link"
              >
                tiling simplex noise
              </a>
              .
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-poppins text-3xl md:text-6xl font-bold uppercase">
            Eko Julianto Salim
          </h1>
          <h2 className="text-lg md:text-2xl mb-2">
            Data Scientist, Developer, and Lifelong Learner
          </h2>
          <div className="flex space-x-2 md:space-x-3 lg:space-x-5 justify-center">
            <HomeLink href="/projects">Projects</HomeLink>
            <HomeLink href="https://github.com/ekojsalim">GitHub</HomeLink>
            <HomeLink href="https://linkedin.com/in/ekojs">LinkedIn</HomeLink>
            <HomeLink href="mailto:eko@ekojs.com">Email</HomeLink>
          </div>
        </div>
      </main>

      <footer className="flex px-4 md:px-8 py-4 justify-center lg:justify-end">
        <DarkModeToggle />
      </footer>
    </div>
  );
};

export default Home;
