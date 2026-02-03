"use client";

import { useState } from "react";
import Image from "next/image";

export function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-accentDark text-4xl font-semibold text-white">
        AB
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt="Adarsh Bathula"
      width={224}
      height={224}
      className="h-full w-full object-cover"
      priority
      onError={() => setImageError(true)}
    />
  );
}
