import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 font-mono uppercase tracking-widest text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)] transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
