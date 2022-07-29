import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "url";

type HomeLinkProps = {
  children: ReactNode;
  href?: string;
};

const HomeLink = ({ children, href = "#" }: HomeLinkProps) => {
  return (
    <Link href={href} passHref>
      <a className="hover:text-link hover:cursor-pointer underline text-lg font-medium">
        {children}
      </a>
    </Link>
  );
};

export default HomeLink;
