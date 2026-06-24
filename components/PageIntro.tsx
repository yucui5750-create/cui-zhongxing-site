import { FadeIn } from "@/components/FadeIn";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-hero-glow pt-16">
      <div className="section-shell pb-14 pt-24 text-center lg:pt-32">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-graphite/60 sm:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
