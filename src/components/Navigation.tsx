import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavButton({ to, children, isActive }: NavButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "relative flex flex-col items-center justify-center gap-0.5 w-[90px] h-[22px] text-center font-hanken text-lg transition-colors duration-300",
        isActive
          ? "text-[#241C6B] font-bold"
          : "text-black font-light hover:text-[#241C6B] hover:font-bold"
      )}
    >
      <span
        className={cn(
          "transition-colors duration-300",
          isActive
            ? "border-b-2 border-[#241C6B]"
            : "border-b-2 border-transparent hover:border-[#241C6B]"
        )}
      >
        {children}
      </span>
    </Link>
  );
}

export function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="flex items-start justify-center gap-8 md:gap-16 lg:gap-[76px] w-full max-w-[588px] h-[22px]">
      <NavButton to="/" isActive={path === "/"}>
        Home
      </NavButton>
      <NavButton to="/about" isActive={path === "/about"}>
        About
      </NavButton>
      <NavButton to="/projects" isActive={path === "/projects"}>
        Projects
      </NavButton>
      <NavButton to="/contact" isActive={path === "/contact"}>
        Contact
      </NavButton>
    </nav>
  );
}
