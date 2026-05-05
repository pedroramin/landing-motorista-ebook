import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  icon?: LucideIcon;
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className = "",
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-[#ffd43b] text-[#151515] shadow-[0_16px_36px_rgba(255,212,59,0.28)] hover:bg-[#ffe066]",
    secondary:
      "border border-[#d8e0d0] bg-white text-[#151515] hover:border-[#149447] hover:text-[#0b6f34]",
    dark: "bg-[#121212] text-white shadow-[0_16px_36px_rgba(0,0,0,0.2)] hover:bg-[#242424]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-[8px] px-6 py-4 text-center text-base font-extrabold transition sm:text-lg ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
    </Link>
  );
}
