"use client";

import { useState, useEffect } from "react";

const RESUME_URL = "/AdarshBathula-Resume.pdf";

export function ResumeViewer() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Set PDF URL with cache-busting on mount so each page load (and after server restart) fetches fresh
  useEffect(() => {
    setPdfUrl(`${RESUME_URL}?t=${Date.now()}`);
  }, []);

  if (!pdfUrl) {
    return (
      <div className="flex h-[70vh] w-full items-center justify-center rounded-xl border border-cardMuted/60 bg-cardMuted/20">
        <p className="text-sm text-foreground/70">Loading resume…</p>
      </div>
    );
  }

  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-cardMuted/60 bg-background shadow-soft">
      <object
        data={pdfUrl}
        type="application/pdf"
        className="h-full w-full"
        aria-label="Adarsh Bathula Resume PDF"
      >
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
          <p className="text-sm text-foreground/80">
            Your browser may not display PDFs inline.
          </p>
          <a
            href={RESUME_URL}
            download
            className="btn-primary"
          >
            Download Resume
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accentDark underline-offset-2 hover:underline"
          >
            Open in new tab
          </a>
        </div>
      </object>
    </div>
  );
}
