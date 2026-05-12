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
      <rect x="2" y="2" width="44" height="44" rx="10" fill="currentColor" />
      <g transform="translate(0 0)">
        <path
          d="M14 30 L24 14 L34 30"
          stroke="var(--color-parchment, #EDE8E2)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="18.5"
          y1="25"
          x2="29.5"
          y2="25"
          stroke="var(--color-parchment, #EDE8E2)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="36" r="1.6" fill="var(--color-terracotta, #D0864A)" />
      </g>
    </svg>
  );
}
