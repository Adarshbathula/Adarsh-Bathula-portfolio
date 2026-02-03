 "use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";
import { IconEmail, IconPhone, IconLinkedIn, IconGitHub, IconLocation } from "@/components/ContactIcons";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function ContactPage() {
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; text: string }>({ type: "idle", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = "faad5e75-2aa1-47da-bf47-563c91b71fe7";
    if (!accessKey) {
      setStatus({ type: "error", text: "Form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment." });
      return;
    }

    const name = String(formData.get("name") ?? "").trim() || "visitor";
    const payload = {
      access_key: accessKey,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: `Portfolio contact from ${name}`,
      botcheck: formData.get("botcheck") ?? "",
    };

    setSubmitting(true);
    setStatus({ type: "idle", text: "" });

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", text: data.message || "Message sent successfully." });
        form.reset();
      } else {
        setStatus({ type: "error", text: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section">
      <div className="flex flex-col gap-3">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">
          Let&apos;s talk about internships, collaborations, or opportunities.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <Card title="Send a Message" className="transition-shadow duration-300 hover:shadow-lg">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={submitting}
                className="rounded-xl border border-cardMuted/70 bg-background px-3 py-2 text-sm shadow-soft outline-none transition hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-60"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={submitting}
                className="rounded-xl border border-cardMuted/70 bg-background px-3 py-2 text-sm shadow-soft outline-none transition hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                disabled={submitting}
                className="rounded-xl border border-cardMuted/70 bg-background px-3 py-2 text-sm shadow-soft outline-none transition hover:border-accent/40 focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-60"
                placeholder="Share some details about what you have in mind..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary mt-1 w-fit disabled:opacity-70 disabled:hover:scale-100"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
            {status.text && (
              <p
                className={`text-sm aria-live="polite" ${
                  status.type === "success"
                    ? "text-green-700"
                    : status.type === "error"
                      ? "text-red-700"
                      : "text-foreground/60"
                }`}
              >
                {status.text}
              </p>
            )}
          </form>
        </Card>

        <Card title="Connect" className="transition-shadow duration-300 hover:shadow-lg">
          <ul className="flex flex-col gap-2 text-sm text-foreground/80">
            <li>
              <a
                href="mailto:adarshbathula12@gmail.com"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cardMuted/50 hover:text-foreground"
              >
                <IconEmail />
                <span className="font-medium text-foreground">Email:</span>
                <span className="truncate">adarshbathula12@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+917901495367"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cardMuted/50 hover:text-foreground"
              >
                <IconPhone />
                <span className="font-medium text-foreground">Phone:</span>
                <span>+91 7901495367</span>
              </a>
            </li>
            <li>
              <Link
                href="https://github.com/Adarshbathula"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cardMuted/50 hover:text-foreground"
              >
                <IconGitHub />
                <span className="font-medium text-foreground">GitHub:</span>
                <span>github.com/Adarshbathula</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/adarsh-bathula/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-cardMuted/50 hover:text-foreground"
              >
                <IconLinkedIn />
                <span className="font-medium text-foreground">LinkedIn:</span>
                <span>linkedin.com/in/adarsh-bathula/</span>
              </Link>
            </li>
            <li>
              <span className="flex items-center gap-3 rounded-xl px-3 py-2.5">
                <IconLocation />
                <span className="font-medium text-foreground">Location:</span>
                <span>Hyderabad, Telangana, India</span>
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

