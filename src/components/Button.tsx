import type { ReactNode } from "react";

const base =
  "hover-float inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-tl-[15px] rounded-br-[15px] border px-8 py-3 font-lato text-[15px] font-normal uppercase tracking-[1.3px] transition-colors duration-300";

const variants = {
  primary:
    "border-transparent bg-[#E8C078] text-[#063A5E] hover:border-[#E8C078] hover:bg-transparent hover:text-[#E8C078]",
  outline:
    "border-white bg-transparent text-white hover:bg-white hover:text-ink",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  icon?: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
