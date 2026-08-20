import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-t-2 border-foreground bg-orange-50/90 backdrop-blur-sm">
      <div className="w-full px-5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xl font-bold text-foreground transition-colors hover:text-muted-foreground">Sandip Shaw</Link>
            <div className="hidden items-center gap-1 md:flex">
              <a href="https://github.com/iizsandu" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              <a href="https://linkedin.com/in/sandip8017shaw" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="mailto:sandip8017shaw@gmail.com" className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Email Sandip Shaw"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === "/"} className={({ isActive }) => `transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <button className="text-foreground md:hidden" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label="Toggle navigation">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="border-t border-border py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} end={item.path === "/"} onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-sm text-muted-foreground hover:text-foreground">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
