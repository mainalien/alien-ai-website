import { Mark } from "./Mark";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<Props["size"]>, { text: string; mark: number; gap: string }> = {
  sm: { text: "text-[22px]", mark: 18, gap: "gap-[7px]" },
  md: { text: "text-[28px]", mark: 22, gap: "gap-[9px]" },
  lg: { text: "text-[40px]", mark: 30, gap: "gap-[12px]" },
};

export function Wordmark({ className, size = "md" }: Props) {
  const s = sizes[size];
  return (
    <span
      className={`inline-flex items-center ${s.gap} font-display leading-none tracking-tight ${className ?? ""}`}
      aria-label="AlienAI"
    >
      <Mark size={s.mark} title="AlienAI" className="-mt-[2px]" />
      <span className={`${s.text}`}>
        <span className="italic">alien</span>
        <span>ai</span>
      </span>
    </span>
  );
}
