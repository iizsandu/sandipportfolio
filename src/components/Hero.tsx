import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "@/assets/profile.jpg";

const Hero = () => (
  <section className="flex min-h-0 flex-1 items-center pt-16">
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto mb-6 flex max-w-6xl flex-col items-center gap-3 text-center md:mb-8">
        <img src={profile} alt="Sandip Shaw" className="h-28 w-28 rounded-full object-cover object-top md:h-36 md:w-36" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Sandip Shaw</h1>
          <p className="mt-2 text-lg text-muted-foreground md:text-xl">AI Developer - Data Scientist</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {[
          ["Experience", "/experience"],
          ["Projects", "/projects"],
          ["Resume", "/resume"],
        ].map(([label, path]) => (
          <Link
            key={path}
            to={path}
            className="group flex min-h-44 flex-col justify-between border border-border bg-background p-6 text-3xl font-semibold tracking-tight transition-all hover:border-foreground hover:bg-muted hover:shadow-medium md:min-h-56 md:p-8 md:text-4xl"
          >
            {label}
            <ArrowUpRight className="h-8 w-8 self-end transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
