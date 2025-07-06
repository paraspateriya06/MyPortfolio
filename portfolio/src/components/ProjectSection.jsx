import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "AI Powered Blog Application",
    description:
      "Built a full-stack blogging platform where users can generate content using AI, publish posts, and manage blogs. Integrated GeminiAI, image upload, authentication, and role-based access.",
    image: "/projects/Blog.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "ImageKit",
      "Gemini API",
    ],
    demoURL: "https://quickblogfrontend-coral.vercel.app/",
    githubURl: "https://github.com/paraspateriya06/QuickBlogMERN",
  },
  {
    id: 2,
    title: "Book Store - Library Management Application",
    description:
      "Created a MERN stack book store with full CRUD functionality, admin panel, and responsive UI. Features include user registration, book management, and secure checkout flow.",
    image: "/projects/Book.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoURL: "https://mooneybookstore.vercel.app/",
    githubURl: "https://github.com/paraspateriya06/BookStoreMernApp",
  },
  {
    id: 3,
    title: "Todo App Backend",
    description:
      "Developed a clean and scalable RESTful API for a ToDo application using Node.js, Express, and MongoDB. Includes user authentication, CRUD operations, and JWT-based security.",
    image: "/projects/Todo.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoURL: "https://github.com/paraspateriya06/TodoAppBackend",
    githubURl: "https://github.com/paraspateriya06/TodoAppBackend",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Each project reflects my focus on clean code, performance, and intuitive user experience. I’ve leveraged modern, scalable tech stacks to build responsive frontend interfaces and robust backend systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubURl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/paraspateriya06"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
