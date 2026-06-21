type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-graphite/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
