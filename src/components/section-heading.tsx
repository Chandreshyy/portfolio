type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        {eyebrow}
      </p>
      <h2
        className={
          inverse
            ? "mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            : "mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        }
      >
        {title}
      </h2>
      <p
        className={
          inverse
            ? "mt-4 text-base leading-7 text-zinc-300"
            : "mt-4 text-base leading-7 text-zinc-600"
        }
      >
        {description}
      </p>
    </div>
  );
}
