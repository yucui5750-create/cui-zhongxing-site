import { profile } from "@/src/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white px-6 py-10 text-center text-sm text-graphite/50">
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="space-y-2 rounded-[1.5rem] border border-black/5 bg-mist px-5 py-5 text-left text-xs leading-6 text-graphite/55 sm:text-center">
          <p>{profile.disclaimer.zh}</p>
          <p>{profile.disclaimer.en}</p>
        </div>
        <p>{profile.footer}</p>
      </div>
    </footer>
  );
}
