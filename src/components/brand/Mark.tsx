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
      <rect x="2" y="2" width="44" height="44" rx="9" fill="currentColor" />
      <g>
        <path
          d="M14 32 L24 14 L34 32"
          stroke="var(--color-parchment, #EDE8E2)"
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <line
          x1="19"
          y1="25.5"
          x2="29"
          y2="25.5"
          stroke="var(--color-parchment, #EDE8E2)"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}
