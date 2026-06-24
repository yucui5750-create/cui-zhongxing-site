import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/src/data/profile";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Collaboration Areas"
        title="可合作方向"
        description="我目前开放以下轻量级合作方向，适合个人展示、内容创作、资料整理和 AI 工具实践类需求。"
      />

      <section className="section-shell pt-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-8 text-graphite/55 sm:text-lg">
            I am open to lightweight collaborations in personal branding,
            content creation, research organization, and AI tool workflows.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profile.services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={index * 0.035}>
                <article className="flex h-full flex-col rounded-[1.7rem] border border-black/5 bg-white p-7 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ice text-graphite">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-7 text-2xl font-semibold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-azure">
                    {service.englishTitle}
                  </p>
                  <p className="mt-5 flex-1 text-base leading-8 text-graphite/62">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                  >
                    咨询合作 / Contact
                    <ArrowRight size={17} />
                  </Link>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </main>
  );
}
