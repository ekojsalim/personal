import Link from "next/link";
import { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => (
  <div className="text-white bg-black dark:bg-white dark:text-black px-2 py-1 w-fit text-sm h-fit mt-1 lg:mt-0">
    {children}
  </div>
);

type LinkProps = {
  children: ReactNode;
  href?: string;
};

const ProjectLink = ({ children, href = "#" }: LinkProps) => {
  return (
    <Link href={href} passHref>
      <a className="hover:text-link hover:cursor-pointer underline">
        {children}
      </a>
    </Link>
  );
};

type ProjectInfo = {
  title: string;
  detail: string;
  description: string;
  tags: string[];
  links: { name: string; url: string }[];
  image: string;
};

const ProjectCard = ({ info }: { info: ProjectInfo }) => {
  return (
    <div className="rounded-sm border p-5 shadow-sm w-11/12 lg:w-10/12 h-fit mx-3 md:mx-auto flex flex-col md:flex-row items-center">
      <div className="sm:w-48 sm:h-48 h-24 w-24 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <img src={info.image} />
      </div>
      <div className="h-full flex-grow flex flex-col justify-between sm:text-left text-center mt-6 sm:mt-0">
        <div>
          <div className="">
            <p className="text-2xl font-semibold font-poppins mb-0">
              {info.title}
            </p>
            <span className="italic text-sm">{info.detail}</span>
          </div>
          <p className="leading-relaxed text-base my-1">{info.description}</p>
          <div className="flex justify-center md:justify-start space-x-3 flex-wrap">
            {info.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="flex space-x-3 mt-4 lg:mt-0 justify-center md:justify-start">
          {info.links.map((link, index) => (
            <ProjectLink key={index} href={link.url}>
              {link.name}
            </ProjectLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
