import Link from "next/link";
import { Card } from "@/components/Card";
import { ProfileImage } from "@/components/ProfileImage";

export default function HomePage() {
  return (
    <div className="section">
      {/* Hero + intro */}
      <section id="home" className="scroll-mt-[5rem]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card className="flex flex-col items-center gap-6 bg-card transition-shadow duration-300 hover:shadow-lg">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-accent/10 blur-xl" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-soft sm:h-48 sm:w-48 lg:h-56 lg:w-56 bg-cardMuted/60">
              <ProfileImage />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accentDark/80">
              Full-Stack Developer
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Adarsh Bathula
            </h1>
            <p className="max-w-xl text-sm text-foreground/75 sm:text-base">
              Aspiring software engineer focused on building clean, reliable web
              applications with the MERN stack, Java, and strong foundations in
              data structures and algorithms.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/projects" className="btn-primary transition-transform hover:scale-[1.02] active:scale-[0.98]">
              View Projects
            </Link>
            <Link href="/contact" className="btn-ghost transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Contact
            </Link>
            <a
              href="/AdarshBathula-Resume.pdf"
              download
              className="btn-ghost transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Download Resume
            </a>
          </div>
        </Card>

        <Card
          title="At a Glance"
          subtitle="MERN, Java, Python, Problem Solving"
          className="bg-card transition-shadow duration-300 hover:shadow-lg"
        >
          <ul className="flex flex-col gap-3 text-sm text-foreground/80">
            <li>
              Strong foundations in{" "}
              <span className="font-medium">
                Python, C#, Java, JavaScript, and C++
              </span>
              {" "}
              , with a focus on clean coding practices and maintainable
              architecture.
            </li>
            <li>
              Comfortable across the full stack with{" "}
              <span className="font-medium">React, Node.js, SQL, and MongoDB</span>
              {" "}
              plus core CS fundamentals like{" "}
              <span className="font-medium">OOP, DSA, and SQL</span>.
            </li>
            <li>
              Experienced collaborating in professional environments through{" "}
              <span className="font-medium">
                industrial training at SCCL&apos;s IT department
              </span>
              {" "}
              , working with databases, SAP systems, and internal tools.
            </li>
            <li>
              Certified in{" "}
              <span className="font-medium">
                AWS Cloud, Generative AI, Google AI/ML, Full Stack Development,
                and Data Analytics
              </span>
              {" "}
              , continuously learning and improving.
            </li>
          </ul>
        </Card>
      </div>
      </section>

      {/* About summary */}
      <section id="about" className="scroll-mt-[5rem]">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle max-w-2xl">
            Professional summary and background.
          </p>
        </div>
        <Card title="Professional Summary" className="bg-card transition-shadow duration-300 hover:shadow-lg">
          <p className="text-sm text-foreground/80">
            Aspiring Software Developer with strong foundations in Python, C#, Java, JavaScript, SQL, and OOP. B.Tech in Computer Science (AI). Seeking a Software Engineering Internship to apply clean coding practices and problem-solving in a collaborative environment.
          </p>
          <Link href="/about" className="btn-ghost mt-4 inline-flex w-fit text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Read full About →
          </Link>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-[5rem]">
      <div className="flex flex-col gap-3">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work and experiments.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Task Management System" subtitle="Full-Stack Web Application" className="transition-shadow duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <p className="mb-3 text-sm text-foreground/80">
            A full-stack task management platform built with a modular backend,
            clean APIs, and a responsive UI for managing tasks end to end.
          </p>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accentDark/75">
            Tech Stack
          </p>
          <p className="text-sm text-foreground/75">
            Python, React, MySQL, REST APIs, SQL, OOP, Testing & Debugging.
          </p>
        </Card>

        <Card title="VibeSense" subtitle="AI-Powered Assistive Hearing System" className="transition-shadow duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <p className="mb-3 text-sm text-foreground/80">
            An AI-driven assistive hearing solution that enhances speech
            clarity using noise suppression, speech enhancement, and ML-based
            prioritization of voice signals.
          </p>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accentDark/75">
            Tech Stack
          </p>
          <p className="text-sm text-foreground/75">
            Python, Signal Processing, Machine Learning, System Design, IoT
            integration.
          </p>
        </Card>

        <Card title="What I&apos;m Looking For" className="transition-shadow duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <p className="mb-3 text-sm text-foreground/80">
            I&apos;m actively seeking a{" "}
            <span className="font-medium">
              Software Engineering or Full-Stack Internship
            </span>{" "}
            where I can contribute to production-grade web applications,
            collaborate with experienced engineers, and grow as a developer.
          </p>
          <p className="text-sm text-foreground/80">
            If you&apos;re building high-impact products and value clean code,
            scalable architecture, and a strong learning mindset, I&apos;d love
            to connect.
          </p>
        </Card>
      </div>
      <Link href="/projects" className="btn-ghost mt-2 inline-flex w-fit text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]">
        View all Projects →
      </Link>
      </section>

      {/* Skills overview */}
      <section id="skills" className="scroll-mt-[5rem]">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and concepts I work with.</p>
        </div>
        <Card className="bg-card transition-shadow duration-300 hover:shadow-lg">
          <div className="flex flex-wrap gap-2 text-sm text-foreground/80">
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">React</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">Next.js</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">Node.js</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">Python</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">Java</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">MySQL</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">MongoDB</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">Git</span>
            <span className="rounded-full bg-cardMuted/60 px-3 py-1.5 transition-colors hover:bg-accent/15 hover:text-foreground">DSA</span>
          </div>
          <Link href="/skills" className="btn-ghost mt-4 inline-flex w-fit text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]">
            View all Skills →
          </Link>
        </Card>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-[5rem]">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let&apos;s talk about opportunities.</p>
        </div>
        <Card className="bg-card transition-shadow duration-300 hover:shadow-lg">
          <p className="mb-4 text-sm text-foreground/80">
            I&apos;m open to internships and collaborations. Reach out via the form or email.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Open Contact Form
            </Link>
            <a href="mailto:adarshbathula12@gmail.com" className="btn-ghost transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Email
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
}

