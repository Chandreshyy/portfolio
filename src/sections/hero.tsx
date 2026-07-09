import {
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { DetailCard } from "@/components/detail-card";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  aboutLines,
  builtApplications,
  education,
  experience,
  heroTagline,
  outsideWork,
  profileMeta,
  siteConfig,
  skillGroups,
} from "@/constants/site";

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="border-t border-zinc-200 py-7 dark:border-white/10">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-[#f4f1e8] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-[#8f918a]">
      {children}
    </p>
  );
}

function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="rounded-lg border border-zinc-200 p-5 dark:border-white/10">
      {children}
    </div>
  );
}

const bodyTextClass =
  "font-serif text-xl leading-9 text-zinc-800 dark:text-[#e8e3d6] sm:text-2xl sm:leading-10";

const pillClass =
  "rounded-md border border-zinc-200 px-3 py-1.5 font-mono text-sm text-zinc-700 transition hover:border-zinc-400 dark:border-white/10 dark:text-[#e8e3d6] dark:hover:border-[#8dbd9f]/70";

export function Hero() {
  const profileIcons = {
    Role: BriefcaseBusiness,
    Location: MapPin,
    Phone,
    Email: Mail,
    GitHub: Github,
    LinkedIn: Linkedin,
  };

  return (
    <article className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
      <header className="grid gap-8 border-b border-zinc-200 pb-10 dark:border-white/10 md:grid-cols-[1fr_320px]">
        <div>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 dark:text-[#9bc8a9] sm:text-5xl">
                {siteConfig.name}
              </h1>
              <p className="mt-3 font-serif text-xl italic text-zinc-600 dark:text-[#aaa89f] sm:text-2xl">
                {heroTagline}
              </p>
            </div>
            <ThemeToggle />
          </div>
          <div className={`mt-8 max-w-3xl space-y-5 ${bodyTextClass}`}>
            {aboutLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 p-5 dark:border-white/10">
          <Eyebrow>Profile</Eyebrow>
          <div className="mt-5 space-y-4">
            {profileMeta.map((item) => {
              const Icon =
                profileIcons[item.label as keyof typeof profileIcons] ??
                BriefcaseBusiness;
              const content = (
                <>
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-zinc-500 dark:text-[#8dbd9f]" />
                  <span className="font-serif text-lg leading-7 text-zinc-700 dark:text-[#e8e3d6]">
                    {item.value}
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-4 hover:text-zinc-950 dark:hover:text-[#f4f1e8]"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="flex gap-4">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      <Section title="Built Applications">
        <div className="space-y-4">
          {builtApplications.map((app) => (
            <DetailCard
              key={app.name}
              marker="APP"
              title={app.name}
              meta={app.meta}
              description={app.description}
              tags={app.tags}
              actions={app.links}
              defaultOpen={false}
            />
          ))}
        </div>
      </Section>

      <Section title="Stack">
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.label}>
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-[#8f918a]">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`${pillClass} bg-zinc-50 dark:bg-white/[0.03]`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Professional Journey">
        <div className="space-y-4">
          {experience.map((item) => (
            <DetailCard
              key={item.period}
              marker={item.period}
              title={item.title}
              meta={item.meta}
              description={item.description}
              tags={item.tags}
              defaultOpen={false}
            />
          ))}
        </div>
      </Section>

      <Section title="Education">
        <DetailCard
          icon={
            <GraduationCap className="h-5 w-5 shrink-0 text-zinc-500 dark:text-[#8dbd9f]" />
          }
          title={education.institute}
          meta={`${education.degree} | ${education.period}`}
          description={education.details}
          tags={education.tags}
          defaultOpen={false}
        />
      </Section>

      <Section title="Outside of Work">
        <DetailCard
          marker="OUT"
          title="Outside of Work"
          description={outsideWork}
          defaultOpen={false}
        />
      </Section>
    </article>
  );
}
