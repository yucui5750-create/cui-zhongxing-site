"use client";

import { useState } from "react";

type AvatarPhotoProps = {
  src: string;
  alt: string;
  fallbackText: string;
};

export function AvatarPhoto({ src, alt, fallbackText }: AvatarPhotoProps) {
  const [failed, setFailed] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolvedSrc = src.startsWith("/") ? `${basePath}${src}` : src;

  return (
    <>
      {!failed ? (
        <img
          src={resolvedSrc}
          alt={alt}
          className="h-full w-full object-cover"
          decoding="async"
          loading="eager"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-silver via-white to-ice">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-ink text-3xl font-semibold text-white shadow-glow">
            {fallbackText}
          </div>
        </div>
      )}
    </>
  );
}
