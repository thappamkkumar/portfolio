import { SVGProps } from 'react'

export function SkillvillaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
      {...props}
    >
      {/* Rounded square */}
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />

      {/* Bigger, balanced 'S' */}
      <path d="M15.5 9.5c0-1.2-1.2-2.2-3.5-2.2s-3.5 1-3.5 2.2 1.2 2.2 3.5 2.2 3.5 1 3.5 2.2-1.2 2.2-3.5 2.2-3.5-1-3.5-2.2" />
    </svg>
  )
}
