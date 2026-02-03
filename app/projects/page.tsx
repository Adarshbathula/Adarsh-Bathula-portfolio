import Link from "next/link";
import { Card } from "@/components/Card";

const projects = [
  {
    name: "Task Management System",
    description:
      "A full-stack web application for creating, updating, and tracking tasks with a clean, modular backend and responsive frontend.",
    tech: ["Python", "React", "MySQL", "REST APIs", "SQL", "OOP"],
    github: "#",
    live: "#",
  },
  {
    name: "VibeSense – Assistive Hearing System",
    description:
      "An AI-powered assistive hearing solution that applies noise suppression and speech enhancement to improve clarity for users.",
    tech: ["Python", "Signal Processing", "Machine Learning", "IoT"],
    github: "#",
    live: "#",
  },
  {
    name: "Portfolio & Experimentation",
    description:
      "A collection of smaller projects and experiments focused on frontend development, UI components, and API integrations.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="section">
      <div className="flex flex-col gap-3">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          Selected work that highlights my experience across full-stack
          development and AI-powered systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="group bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold tracking-tight sm:text-lg transition-colors group-hover:text-accentDark">
                {project.name}
              </h2>
            </div>
            <p className="mb-4 text-sm text-foreground/80">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cardMuted/80 px-3 py-1 text-[11px] font-medium text-foreground/80 shadow-soft transition-colors group-hover:bg-accent/15"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-3 text-xs">
              <Link
                href={project.github}
                className="text-accentDark underline-offset-2 transition hover:underline hover:text-accent"
              >
                GitHub
              </Link>
              <span className="h-1 w-1 rounded-full bg-cardMuted" />
              <Link
                href={project.live}
                className="text-accentDark underline-offset-2 transition hover:underline hover:text-accent"
              >
                Live Demo
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

