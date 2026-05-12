type Props = {
  className?: string;
  size?: number;
  title?: string;
};

export function Mark({ className, size = 28, title = "AlienAI mark" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M4 30 C 14 26, 34 26, 44 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="20" r="5.5" fill="currentColor" />
      <line
        x1="24"
        y1="34"
        x2="24"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
