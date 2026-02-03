export function Footer() {
  return (
    <footer className="border-t border-cardMuted/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-foreground/60 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Adarsh Bathula. All rights reserved.</p>
        <p className="text-[11px]">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

