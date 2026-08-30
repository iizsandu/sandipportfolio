import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const socialLinks = [
  { href: "https://github.com/iizsandu", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/sandip8017shaw", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:sandip8017shaw@gmail.com", label: "Email", icon: Mail },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex justify-center px-4">
      <div className="flex items-center gap-7">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-8 w-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
