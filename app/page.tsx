import { ArrowUpRight, Check, Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/src/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Hero />

      <section id="about" className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow={profile.about.eyebrow}
              title={profile.about.title}
              align="left"
            />
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-8">
            <div className="space-y-5 text-xl font-medium leading-9 text-graphite sm:text-2xl sm:leading-10">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-[1.7rem] border border-black/5 bg-mist p-7">
              <div className="space-y-4 text-base leading-8 text-graphite/60">
                {profile.about.english.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="focus" className="bg-mist/70">
        <div className="section-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Focus"
              title="正在投入的学习方向"
              description="Learning areas that connect tools, language, market understanding, and digital execution."
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {profile.focus.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ice text-graphite">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-7 text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-graphite/60">
                      {item.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Projects"
              title="项目展示入口"
              description="From learning notes to real digital projects, every small execution becomes portfolio material."
              align="left"
            />
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <FadeIn key={project.title} delay={index * 0.035}>
                  <article className="group flex min-h-32 items-start justify-between rounded-[1.5rem] border border-black/5 bg-gradient-to-br from-white to-mist p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-graphite shadow-sm">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-ink">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-graphite/30 transition group-hover:text-graphite"
                    />
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-ink text-white">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
                可合作方向
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Clear, useful, execution-focused digital support for small
                projects, learning workflows, and early business experiments.
              </p>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2">
              {profile.services.map((service, index) => (
                <FadeIn key={service} delay={index * 0.035}>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                      <Check size={16} />
                    </span>
                    {service}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="goals" className="section-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Goals"
            title="短期执行，长期复利"
            description="A clear growth map from daily practice to personal brand and sustainable digital income."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {profile.goals.map((goal, index) => (
            <FadeIn key={goal.label} delay={index * 0.06}>
              <article className="h-full rounded-[1.7rem] border border-black/5 bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">
                  {goal.label}
                </p>
                <h3 className="mt-6 text-2xl font-semibold text-ink">
                  {goal.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-graphite/60">
                  {goal.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-b from-white to-ice/70">
        <div className="section-shell">
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-white/72 p-8 text-center shadow-glow backdrop-blur-2xl sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                <Mail size={23} />
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.24em] text-graphite/40">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                {profile.contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-graphite/60 sm:text-lg">
                {profile.contact.copy}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 sm:w-auto"
                >
                  {profile.contact.emailLabel}：{profile.email}
                </a>
                <div className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-graphite shadow-soft sm:w-auto">
                  {profile.contact.douyinLabel}：{profile.douyin}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-6 py-8 text-center text-sm text-graphite/50">
        {profile.footer}
      </footer>
    </main>
  );
}
