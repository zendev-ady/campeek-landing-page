import Link from "next/link";
import { Tent } from "lucide-react";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  tone?: "light" | "dark";
}

export function Logo({ className, href, tone = "light" }: LogoProps) {
  const paletteClass = tone === "dark" ? "text-mint" : "text-forest";

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-outfit lowercase",
        paletteClass,
        className
      )}
    >
      <Tent aria-hidden className="h-7 w-7 text-current" />
      <span className="text-lg font-bold tracking-tight">campeek</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex" aria-label="Campeek domů">
        {content}
      </Link>
    );
  }

  return content;
}
