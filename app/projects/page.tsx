import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusBadge } from "@/components/StatusBadge";
import { profile } from "@/src/data/profile";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Projects"
        title="项目与建设记录"
        description="这里展示我已经完成的项目，以及正在用 AI、Codex、跨境电商、内容工作流和自动化脚本持续建设的方向。"
      />

      <section className="section-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Completed Projects"
            title="已完成项目"
            description="已经可以公开展示和访问的项目，会保留真实入口。"
            align="left"
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profile.completedProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <FadeIn key={project.title} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-[1.8rem] border border-black/5 bg-gradient-to-br from-white to-ice/60 p-7 shadow-soft">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-graphite shadow-sm">
                      <Icon size={22} />
                    </div>
                    <StatusBadge label={project.status} />
                  </div>
                  <h2 className="mt-7 text-2xl font-semibold text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-azure">
                    {project.englishTitle}
                  </p>
                  <p className="mt-5 text-base leading-8 text-graphite/62">
                    {project.description}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-graphite/45">
                    {project.englishDescription}
                  </p>
                  <Link
                    href={project.href}
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                  >
                    {project.cta}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="bg-mist/70">
        <div className="section-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Building Now"
              title="正在建设中"
              description="这些项目目前还没有详情页，因此只显示状态标签，不放任何假的详情按钮。"
              align="left"
            />
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {profile.buildingProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <FadeIn key={project.title} delay={index * 0.035}>
                  <article className="h-full rounded-[1.7rem] border border-black/5 bg-white p-7 shadow-soft">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ice text-graphite">
                        <Icon size={22} />
                      </div>
                      <StatusBadge label={project.status} />
                    </div>
                    <h2 className="mt-7 text-2xl font-semibold text-ink">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-azure">
                      {project.englishTitle}
                    </p>
                    <p className="mt-5 text-base leading-8 text-graphite/62">
                      {project.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
