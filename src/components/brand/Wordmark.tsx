import { Mark } from "./Mark";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<Props["size"]>, { text: string; mark: number; gap: string }> = {
  sm: { text: "text-[18px]", mark: 22, gap: "gap-[9px]" },
  md: { text: "text-[22px]", mark: 28, gap: "gap-[10px]" },
  lg: { text: "text-[36px]", mark: 44, gap: "gap-[14px]" },
};

export function Wordmark({ className, size = "md" }: Props) {
  const s = sizes[size];
  return (
    <span
      className={`inline-flex items-center ${s.gap} font-display leading-none tracking-[-0.04em] text-inkwell ${className ?? ""}`}
      aria-label="AlienAI"
      style={{ fontVariationSettings: '"opsz" 32, "wdth" 88, "wght" 700' }}
    >
      <Mark size={s.mark} title="AlienAI" className="text-inkwell shrink-0" />
      <span className={`${s.text} font-bold`}>
        alienai
      </span>
    </span>
  );
}
