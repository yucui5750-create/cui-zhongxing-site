import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/src/data/profile";

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Goals"
        title="目标与长期成长路线"
        description="从 30 天节奏、3 个月案例，到 3 年数字收入系统，持续把学习变成复利。"
      />

      <section className="section-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          {profile.goals.map((goal, index) => (
            <FadeIn key={goal.label} delay={index * 0.06}>
              <article className="h-full rounded-[1.7rem] border border-black/5 bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">
                  {goal.label}
                </p>
                <h2 className="mt-6 text-2xl font-semibold text-ink">
                  {goal.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-graphite/60">
                  {goal.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-mist/70">
        <div className="section-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Long-Term Route"
              title="长期成长路线"
              description="路线清晰，行动才不会散。每一个阶段都服务于真实项目、真实技能和真实合作机会。"
            />
          </FadeIn>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {profile.longTermRoute.map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <div className="flex gap-5 rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-base font-medium leading-8 text-graphite">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
