import { ResumeViewer } from "@/components/ResumeViewer";

export default function ResumePage() {
  return (
    <div className="section">
      <div className="flex flex-col gap-3">
        <h1 className="section-title">Resume</h1>
        <p className="section-subtitle">
          View or download my resume as a PDF.
        </p>
      </div>
      <div className="card flex flex-col gap-4 bg-card p-4 sm:p-6 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-foreground/80">
            For the latest version, download the PDF below.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/AdarshBathula-Resume.pdf"
              download
              className="btn-primary"
            >
              Download Resume
            </a>
            <a
              href="/AdarshBathula-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              Open in new tab
            </a>
          </div>
        </div>

        <ResumeViewer />
      </div>
    </div>
  );
}

