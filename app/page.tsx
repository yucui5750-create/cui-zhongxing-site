import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { profile } from "@/src/data/profile";

export default function Home() {
  const featuredProjects = [
    ...profile.completedProjects,
    ...profile.buildingProjects.slice(0, 3)
  ];
  const featuredServices = profile.services.slice(0, 4);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Hero />

      <section className="bg-gradient-to-br from-white via-ice/60 to-white">
        <div className="section-shell py-16 text-center lg:py-24">
          <FadeIn className="mx-auto max-w-5xl">
            <p className="text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
              {profile.slogan.zh}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-8 text-graphite/55 sm:text-2xl">
              {profile.slogan.en}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="展示我是谁，也记录我正在变成谁。"
              align="left"
            />
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-graphite shadow-soft transition hover:-translate-y-0.5"
            >
              了解更多 / About Me
              <ArrowRight size={17} />
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-xl font-medium leading-9 text-graphite sm:text-2xl sm:leading-10">
              {profile.about.summary}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {profile.about.positioning.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-black/5 bg-mist px-5 py-3 text-sm font-semibold text-graphite/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-mist/70">
        <div className="section-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="High-value Skills"
              title="高价值技能"
              description="围绕 AI、网站、视觉内容和自动化流程，把学习方向逐步沉淀成可交付的数字能力。"
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {profile.highValueSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <FadeIn key={skill.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.8rem] border border-white/80 bg-white/75 p-7 shadow-soft backdrop-blur-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ice text-graphite">
                      <Icon size={22} />
                    </div>
                    <h2 className="mt-7 text-2xl font-semibold text-ink">
                      {skill.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-azure">
                      {skill.englishTitle}
                    </p>
                    <p className="mt-5 text-base leading-8 text-graphite/62">
                      {skill.description}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-graphite/45">
                      {skill.englishDescription}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Focus"
            title="重点学习方向"
            description="从 AI、语言、跨境电商到设计与编程，持续把学习变成可以执行的数字能力。"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {profile.focus.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ice text-graphite">
                    <Icon size={21} />
                  </div>
                  <h2 className="mt-7 text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/60">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-mist">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <FadeIn>
              <SectionHeading
                eyebrow="Projects"
                title="精选项目"
                description="展示已完成项目和正在建设中的方向。没有详情页的项目只显示状态，不放假按钮。"
                align="left"
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                查看全部项目 / View Projects
                <ArrowRight size={17} />
              </Link>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <FadeIn key={project.title} delay={index * 0.04}>
                  <article className="h-full rounded-[1.6rem] border border-black/5 bg-white p-7 shadow-soft">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ice text-graphite">
                        <Icon size={21} />
                      </div>
                      <StatusBadge label={project.status} />
                    </div>
                    <h2 className="mt-7 text-2xl font-semibold text-ink">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-azure">
                      {project.englishTitle}
                    </p>
                    <p className="mt-4 text-base leading-8 text-graphite/60">
                      {project.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[2rem] border border-black/5 bg-gradient-to-br from-ink via-graphite to-ink p-8 text-white shadow-soft sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">
                Blog & Learning Notes
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
                博客与学习记录
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                记录 AI、Codex、跨境电商、语言学习、投资学习和个人成长方面的思考与实践。
              </p>
              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                阅读博客 / Read Blog
                <ArrowRight size={17} />
              </Link>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2">
              {profile.blogPosts.slice(0, 4).map((post, index) => (
                <FadeIn key={post.title} delay={index * 0.035}>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-xl">
                    <p className="text-sm font-semibold text-white/90">
                      {post.title}
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      {post.englishTitle}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/40">
                Collaboration
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
                可合作方向
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                如果你需要 PPT、简单网站、AI 内容素材、资料整理或效率工具，可以从这里进入服务页或直接联系。
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                >
                  查看服务 / Services
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  联系合作 / Contact
                  <ArrowRight size={17} />
                </Link>
              </div>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2">
              {featuredServices.map((service, index) => (
                <FadeIn key={service.title} delay={index * 0.035}>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                      <Check size={16} />
                    </span>
                    {service.title}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
