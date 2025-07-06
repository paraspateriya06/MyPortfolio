import { Briefcase, Bug, Code } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Web Developer & DSA Problem Solver
            </h3>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              I'm a passionate full-stack developer with hands-on experience building real-world projects and solving over <strong>450+ DSA problems</strong>. I love combining logic with practical development, using technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Driven by curiosity and creativity, I focus on crafting scalable, elegant solutions while staying sharp with the latest tools and trends in modern development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button w-fit">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1Z5NBg8kvMq7U6Mi05x1Ar8i1gyoSCYis/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Dev */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and scalable web applications using modern frameworks like React, Node.js, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* DSA/Problem Solving */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Tackling complex problems using strong DSA fundamentals and real-world debugging experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Overseeing full-stack projects end-to-end—from planning to deployment—using the MERN stack.
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
