import { Card } from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="section">
      <div className="flex flex-col gap-3">
        <h1 className="section-title">About</h1>
        <p className="section-subtitle">
          A quick overview of my background, education, and experience.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card title="Professional Summary" className="transition-shadow duration-300 hover:shadow-lg">
          <p className="mb-3 text-sm text-foreground/80">
            I&apos;m an aspiring{" "}
            <span className="font-medium">Software Developer</span> and{" "}
            <span className="font-medium">MERN Stack / JavaScript</span>{" "}
            enthusiast with strong foundations in{" "}
            <span className="font-medium">
              Python, C#, Java, JavaScript, SQL, and object-oriented
              programming
            </span>
            . I enjoy building clean, reliable, and well-documented software
            that solves real problems.
          </p>
          <p className="mb-3 text-sm text-foreground/80">
            As a B.Tech Computer Science (Artificial Intelligence) student, I
            constantly work on improving my{" "}
            <span className="font-medium">
              data structures, algorithms, and system design
            </span>{" "}
            skills while applying them to practical web development projects
            and AI-powered systems.
          </p>
          <p className="text-sm text-foreground/80">
            I&apos;m looking for opportunities to{" "}
            <span className="font-medium">
              contribute to engineering teams, learn from experienced
              developers, and grow into a well-rounded full-stack engineer
            </span>
            .
          </p>
        </Card>

        <Card title="Quick Facts" className="transition-shadow duration-300 hover:shadow-lg">
          <ul className="flex flex-col gap-2 text-sm text-foreground/80">
            <li>
              Based in{" "}
              <span className="font-medium">Hyderabad, Telangana, India</span>.
            </li>
            <li>
              Strong interest in{" "}
              <span className="font-medium">
                full-stack web development, AI, and cloud
              </span>
              .
            </li>
            <li>
              Comfortable working on{" "}
              <span className="font-medium">
                both frontend UX and backend APIs
              </span>
              .
            </li>
            <li>
              Enjoys solving{" "}
              <span className="font-medium">DSA and problem-solving</span>{" "}
              challenges.
            </li>
          </ul>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Education" className="transition-shadow duration-300 hover:shadow-lg">
          <ul className="flex flex-col gap-3 text-sm text-foreground/80">
            <li>
              <p className="font-semibold">
                B.Tech in Computer Science (Artificial Intelligence)
              </p>
              <p className="text-xs text-foreground/70">
                Gokaraju Rangaraju Institute of Engineering and Technology
              </p>
              <p className="text-xs text-foreground/70">2024 - 2027</p>
              <p className="mt-1 text-xs text-foreground/70">CGPA: 8.56</p>
            </li>
            <li>
              <p className="font-semibold">Diploma – Singareni Collieries</p>
              <p className="text-xs text-foreground/70">
                Singareni Collieries Polytechnic
              </p>
              <p className="text-xs text-foreground/70">2021 - 2024</p>
              <p className="mt-1 text-xs text-foreground/70">CGPA: 9.68</p>
            </li>
            <li>
              <p className="font-semibold">SSC</p>
              <p className="text-xs text-foreground/70">
                Little Flowers High School
              </p>
              <p className="mt-1 text-xs text-foreground/70">GPA: 10</p>
            </li>
          </ul>
        </Card>

        <Card title="Experience Highlights" className="transition-shadow duration-300 hover:shadow-lg">
          <p className="mb-3 text-sm text-foreground/80">
            <span className="font-semibold">
              Industrial Training – SCCL IT Department
            </span>{" "}
            (Dec–May 2024)
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-4 text-sm text-foreground/80">
            <li>
              Assisted the IT team in understanding{" "}
              <span className="font-medium">enterprise software workflows</span>
              .
            </li>
            <li>
              Worked with{" "}
              <span className="font-medium">
                databases, SAP systems, and internal tools
              </span>
              .
            </li>
            <li>
              Gained exposure to{" "}
              <span className="font-medium">
                software documentation and troubleshooting
              </span>
              .
            </li>
            <li>
              Collaborated in a{" "}
              <span className="font-medium">professional technical team</span>{" "}
              environment.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

