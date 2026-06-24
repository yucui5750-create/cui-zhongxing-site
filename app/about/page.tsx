import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/src/data/profile";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageIntro
        eyebrow="About"
        title="关于崔中行"
        description="完整自我介绍、学习方向、个人定位和成长记录。"
      />

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow={profile.about.eyebrow}
              title={profile.about.title}
              align="left"
            />
            <p className="mt-7 rounded-[1.5rem] border border-black/5 bg-mist p-6 text-sm font-semibold leading-7 text-graphite/60">
              {profile.identity}
            </p>
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

      <section className="bg-mist/70">
        <div className="section-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Learning Direction"
              title="学习方向"
              description="这些方向不是一次性标签，而是我长期建设能力、项目和合作机会的基础。"
            />
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {profile.focus.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.035}>
                  <article className="h-full rounded-[1.4rem] border border-black/5 bg-white p-6 shadow-soft">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ice text-graphite">
                      <Icon size={20} />
                    </div>
                    <h2 className="mt-6 text-lg font-semibold text-ink">
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
        </div>
      </section>

      <section className="section-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Positioning"
            title="个人定位"
            description="当前阶段，我把自己定位为持续学习、公开实践、逐步建立数字能力的学生型创作者。"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {profile.about.positioning.map((item, index) => (
            <FadeIn key={item} delay={index * 0.035}>
              <div className="rounded-[1.4rem] border border-black/5 bg-white p-6 text-center text-base font-semibold text-graphite shadow-soft">
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-ice/70">
        <div className="section-shell">
          <FadeIn>
            <SectionHeading
              eyebrow="Growth Notes"
              title="成长记录"
              description="这些不是口号，而是每天可以执行、可以复盘、可以沉淀成项目的方向。"
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {profile.about.growthNotes.map((note, index) => (
              <FadeIn key={note} delay={index * 0.04}>
                <article className="rounded-[1.5rem] border border-black/5 bg-white p-7 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-azure">
                    0{index + 1}
                  </p>
                  <p className="mt-5 text-lg font-semibold leading-8 text-graphite">
                    {note}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
