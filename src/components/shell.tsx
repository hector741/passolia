"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { useStore } from "@/modules/organizer/store";

const links = [
  { href: "/hoje", label: "Hoje" },
  { href: "/planejar", label: "Planejar" },
  { href: "/rotinas", label: "Rotinas" },
  { href: "/minha-vida", label: "Minha vida" },
  { href: "/preferencias", label: "Preferências" },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { state, message, clearMessage } = useStore();

  useEffect(() => {
    if (!state) {
      return;
    }
    const root = document.documentElement;
    const theme = state.preferences.theme;
    const dark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = dark ? "dark" : "light";
    root.style.fontSize = state.preferences.textScale === "lg" ? "18px" : "16px";
  }, [state]);

  return (
    <div className="min-h-full md:grid md:grid-cols-[220px_1fr]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:z-20 focus:m-3 focus:bg-surface focus:px-3 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <header className="border-b border-line bg-surface md:min-h-full md:border-r md:border-b-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <Image
            src="/brand/passolia-simbolo-violeta.svg"
            alt=""
            width={32}
            height={32}
          />
          <div>
            <p className="text-sm font-semibold">Passólia</p>
            <p className="text-xs text-muted">No seu ritmo</p>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-3 pb-3 md:flex-col md:px-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-11 items-center rounded-[10px] px-3 text-sm font-medium ${
                  active ? "bg-action text-action-text" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="mx-auto w-full max-w-3xl px-4 py-6">
        {message ? (
          <p className="mb-4 flex items-start justify-between gap-3 rounded-[16px] border border-line bg-surface px-4 py-3 text-sm" role="status">
            <span>{message}</span>
            <button type="button" className="min-h-11 underline" onClick={clearMessage}>
              Fechar
            </button>
          </p>
        ) : null}
        <div id="conteudo">{children}</div>
      </div>
    </div>
  );
}
