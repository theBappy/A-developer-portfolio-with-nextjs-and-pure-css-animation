import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Linkedin",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/25 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex md:flex-row md:justify-between flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2023 theBappy.com | All Rights Reserved.</div>
          <nav className="flex md:flex-row flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <a key={link.title} className="inline-flex items-center gap-1.5" href={link.href}>
                <span className="font-semibold cursor-pointer">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
