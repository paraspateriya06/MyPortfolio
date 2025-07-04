import { Briefcase, Bug, Code, Code2, Laptop, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Web developer & DSA problem solver
            </h3>

            <p className="text-muted-foreground">
              As a passionate web developer with hands-on experience in building
              real-world projects,I’ve solved over 450+ data structure and
              algorithm problems and built real-world projects using React,
              Node.js, and MongoDB — combining logic with practical development.{" "}
            </p>

            <p className="text-muted-foreground">
              Driven by curiosity and creativity, I build elegant, scalable web
              solutions and stay actively engaged with the latest tools and
              trends in modern development.{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=" https://drive.google.com/file/d/1Iue2ySN0CeaQKGUEjvwALApdPSQzyX9p/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating responsive and scalable web applications using
                    modern frameworks like React, Node.js, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Problem Solving </h4>
                  <p className="text-muted-foreground">
                    Solving complex problems and fixing critical bugs using
                    strong DSA fundamentals and real-world debugging experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Project Management{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Overseeing full-stack projects from planning to deployment
                    using the MERN stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
