import { Mark } from "./Mark";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<Props["size"]>, { text: string; mark: number; gap: string }> = {
  sm: { text: "text-[17px]", mark: 22, gap: "gap-[9px]" },
  md: { text: "text-[20px]", mark: 26, gap: "gap-[10px]" },
  lg: { text: "text-[32px]", mark: 40, gap: "gap-[14px]" },
};

export function Wordmark({ className, size = "md" }: Props) {
  const s = sizes[size];
  return (
    <span
      className={`inline-flex items-center ${s.gap} wordmark leading-none text-ink ${className ?? ""}`}
      aria-label="AlienAI"
    >
      <Mark size={s.mark} title="AlienAI" className="text-ink shrink-0" />
      <span className={s.text}>alienai</span>
    </span>
  );
}
