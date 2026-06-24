import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import { profile } from "@/src/data/profile";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Blog & Learning Notes"
        title="博客与学习记录"
        description="这里会记录我在 AI、Codex、跨境电商、语言学习、投资学习、加密货币和个人成长方面的思考与实践。"
      />

      <section className="section-shell pt-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-8 text-graphite/55 sm:text-lg">
            This section records my thoughts and practice in AI, Codex,
            cross-border e-commerce, language learning, investment learning,
            crypto, and personal growth.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {profile.blogPosts.map((post, index) => {
            const Icon = post.icon;

            return (
              <FadeIn key={post.title} delay={index * 0.035}>
                <article className="h-full rounded-[1.7rem] border border-black/5 bg-gradient-to-br from-white to-mist p-7 shadow-soft">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-graphite shadow-sm">
                      <Icon size={22} />
                    </div>
                    <StatusBadge label={post.status} />
                  </div>
                  <h2 className="mt-7 text-2xl font-semibold text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-azure">
                    {post.englishTitle}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </main>
  );
}
