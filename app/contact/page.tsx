import { Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/src/data/profile";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Contact"
        title={`${profile.contact.title} / ${profile.contact.englishTitle}`}
        description={profile.contact.copy}
      />

      <section className="bg-gradient-to-b from-white to-ice/70">
        <div className="section-shell pt-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-white/72 p-8 text-center shadow-glow backdrop-blur-2xl sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                <Mail size={23} />
              </div>
              <h2 className="mt-7 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                {profile.contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-graphite/62 sm:text-lg">
                {profile.contact.englishCopy}
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-[1.5rem] bg-ink px-7 py-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                >
                  {profile.contact.emailCta}
                </a>
                <div className="rounded-[1.5rem] border border-black/10 bg-white px-7 py-5 text-left shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite/40">
                    {profile.contact.douyinLabel}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-ink">
                    {profile.douyin}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-mist px-6 py-5 text-left">
                <p className="text-sm font-semibold text-graphite/50">
                  {profile.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 inline-flex text-lg font-semibold text-ink transition hover:text-azure"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
