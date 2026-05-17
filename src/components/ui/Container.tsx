import { ReactNode } from "react";

export function Container({ children, wide = false, className = "" }:
  { children: ReactNode; wide?: boolean; className?: string }) {
  return (
    <div className={`${wide ? "container-wide" : "container-prose"} ${className}`}>
      {children}
    </div>
  );
}
