"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

type DetailCardProps = {
  marker?: string;
  title: string;
  meta?: string;
  description: string;
  tags?: string[];
  actions?: Array<{ label: string; href: string }>;
  icon?: ReactNode;
  defaultOpen?: boolean;
};

type Pill = {
  label: string;
  href?: string;
};

const detailTextClass =
  "font-serif text-lg leading-8 text-zinc-600 dark:text-[#aaa89f] sm:text-xl sm:leading-9";

const pillClass =
  "rounded-md border border-zinc-200 px-3 py-1.5 font-mono text-sm text-zinc-700 transition hover:border-zinc-400 dark:border-white/10 dark:text-[#e8e3d6] dark:hover:border-[#8dbd9f]/70";

export function DetailCard({
  marker,
  title,
  meta,
  description,
  tags,
  actions,
  icon,
  defaultOpen = false,
}: DetailCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const pills: Pill[] = [
    ...(tags ?? []).map((tag) => ({ label: tag })),
    ...(actions ?? []).map((action) => ({
      label: action.label,
      href: action.href,
    })),
  ];

  return (
    <article className="rounded-lg border border-zinc-200 dark:border-white/10">
      <div className="grid gap-3 p-5 sm:grid-cols-[3rem_1fr]">
        <div className="font-mono text-sm text-zinc-400 dark:text-[#8f918a]">
          {icon ?? marker}
        </div>
        <div className="min-w-0">
          <div className="grid items-start gap-4 sm:grid-cols-[minmax(0,1fr)_1.25rem]">
            <div className="min-w-0">
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="block w-full text-left"
                aria-expanded={isOpen}
              >
                <h3 className="font-serif text-2xl text-zinc-950 dark:text-[#f4f1e8]">
                  {title}
                </h3>
                {meta ? (
                  <p className="mt-2 font-mono text-sm text-zinc-500 dark:text-[#8f918a]">
                    {meta}
                  </p>
                ) : null}
              </button>
              {pills.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {pills.map((pill) =>
                    pill.href ? (
                      <a
                        key={pill.label}
                        href={pill.href}
                        className={`${pillClass} bg-zinc-50 font-semibold text-zinc-900 dark:bg-white/[0.03] dark:text-[#f4f1e8]`}
                      >
                        {pill.label}
                      </a>
                    ) : (
                      <span key={pill.label} className={pillClass}>
                        {pill.label}
                      </span>
                    ),
                  )}
                </div>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="mt-1 flex h-6 w-6 items-center justify-center"
              aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
              aria-expanded={isOpen}
            >
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 dark:text-[#8f918a] ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-zinc-200 px-5 pb-5 pt-4 transition-opacity duration-200 dark:border-white/10 sm:ml-12 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className={detailTextClass}>{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
