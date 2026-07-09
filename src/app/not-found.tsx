import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">
        Page not found
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600">
        This route is not part of the portfolio yet.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back home
      </ButtonLink>
    </section>
  );
}
