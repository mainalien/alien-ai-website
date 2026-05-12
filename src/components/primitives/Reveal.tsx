import { createElement, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li";
};

export function Reveal({ children, className, as = "div" }: Props) {
  return createElement(as, { className }, children);
}
