import { ArrowDown } from "lucide-react";
import React from "react";
import profile from "../../public/projects/profile.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="w-full flex flex-col items-center z-10">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile Picture"
          className="h-60 w-60 rounded-full border-4 border-primary shadow-xl mb-8 object-cover"
        />

        {/* Hero Content */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-snug">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Paras
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Mani Paterya
            </span>
            <br />
            <span className="text-3xl ml-2 opacity-0 animate-fade-in-delay-3">
              I'm a Software <span className="text-primary">Developer</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
            A final-year IT student focused on full-stack development and clean, scalable web applications. I blend strong problem-solving skills with a sharp eye for user experience.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
