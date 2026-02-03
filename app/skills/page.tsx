"use client";

import { Card } from "@/components/Card";

const skillCategories = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Python", "Java", "C#", "SQL"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Core CS",
    items: ["Object-Oriented Programming (OOP)", "Data Structures", "Algorithms", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    title: "Cloud & AI",
    items: [
      "AWS Academy Cloud Foundations",
      "Generative AI",
      "Google AI/ML",
      "Data Analytics & Visualization",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="section">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle max-w-xl mx-auto">
          A snapshot of the technologies and concepts I work with.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            title={category.title}
            className="bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-accent/20"
          >
            <ul className="flex flex-wrap gap-2 text-sm text-foreground/85">
              {category.items.map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-full bg-cardMuted/60 px-4 py-2 text-[13px] font-medium transition hover:bg-accent/15 hover:text-foreground">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

