import Link from "next/link";
import { ArrowRight, BookOpenText, Mail } from "lucide-react";
import { AvatarPhoto } from "@/components/AvatarPhoto";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/src/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-glow pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-5xl rounded-full bg-azure/20 blur-3xl" />
      <div className="section-shell relative grid min-w-0 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn className="mx-auto w-full min-w-0 max-w-4xl text-center lg:mx-0 lg:text-left">
          <p className="mx-auto mb-5 max-w-xs break-words text-xs font-semibold uppercase tracking-[0.18em] text-graphite/50 sm:max-w-none sm:text-sm sm:tracking-[0.28em]">
            {profile.role}
          </p>
          <p className="text-2xl font-medium text-graphite/60 sm:text-3xl">
            {profile.name} · {profile.englishName}
          </p>
          <h1 className="mt-7 break-words text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {profile.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-graphite/70 sm:text-xl lg:mx-0">
            {profile.hero.subheadline}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-graphite/60 sm:text-lg lg:mx-0">
            {profile.hero.description}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-graphite/48 sm:text-base lg:mx-0">
            {profile.hero.englishDescription}
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-md min-w-0 flex-col justify-center gap-4 sm:max-w-none sm:flex-row sm:flex-wrap lg:mx-0 lg:justify-start">
            <Link
              href="/projects"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-center text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-graphite sm:w-auto sm:px-7"
            >
              {profile.hero.primaryCta}
              <ArrowRight size={18} className="shrink-0" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/72 px-5 py-4 text-center text-sm font-semibold text-graphite shadow-soft backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7"
            >
              {profile.hero.secondaryCta}
              <Mail size={18} className="shrink-0" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/50 px-5 py-4 text-center text-sm font-semibold text-graphite shadow-soft backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7"
            >
              {profile.hero.blogCta}
              <BookOpenText size={18} className="shrink-0" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.12}
          className="relative mx-auto w-full min-w-0 max-w-[420px] lg:mr-0"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-ice via-white to-silver/60 blur-2xl" />
          <div className="glass-panel relative rounded-[2rem] p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-gradient-to-br from-silver via-white to-ice">
              <AvatarPhoto
                src={profile.avatar}
                alt={`${profile.englishName} avatar`}
                fallbackText="CZ"
              />
            </div>
            <div className="px-2 pb-3 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-graphite/40">
                Personal Brand
              </p>
              <p className="mt-2 text-2xl font-semibold text-ink">
                Learning in public, building with AI.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
