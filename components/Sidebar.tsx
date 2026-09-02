import Link from "next/link";

const NAV = [
  { href: "/inbox", label: "Inbox" },
  { href: "/", label: "Hoy" },
  { href: "/upcoming", label: "Proximo" },
];

export default function Sidebar() {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col bg-[var(--ink)] p-4 text-[var(--paper)]">
      <div className="mb-6 px-2 text-lg font-extrabold text-[var(--cyan)]">VAO Todo</div>
      <nav className="flex flex-col gap-1">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[10px] px-3 py-2 text-sm font-medium text-[var(--paper)]/80 transition hover:bg-[var(--ink-2)] hover:text-[var(--cyan)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
        Mis proyectos
      </div>
    </aside>
  );
}
