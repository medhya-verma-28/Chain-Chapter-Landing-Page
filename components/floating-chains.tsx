"use client"

import { useEffect, useMemo, useRef } from "react"

const PINK = "#ec4899"
const PURPLE = "#7c3aed"

type Pair = {
  x: number
  y: number
  vx: number
  vy: number
  dx: number
  dy: number
  c1: "pink" | "purple"
  c2: "pink" | "purple"
}

export default function FloatingChains() {
  const PAIRS = 14

  // Generate a small set of drifting pairs (normalized to 100x100 viewBox units)
  const pairs = useMemo<Pair[]>(() => {
    const list: Pair[] = []
    for (let i = 0; i < PAIRS; i++) {
      const angle = Math.random() * Math.PI * 2
      // separation between hexes in viewBox units (tiny)
      const sep = 2 + Math.random() * 1.2
      const speed = 0.015 + Math.random() * 0.025 // gentle drift
      list.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        dx: Math.cos(angle) * sep,
        dy: Math.sin(angle) * sep,
        c1: i % 2 === 0 ? "pink" : "purple",
        c2: i % 2 === 0 ? "purple" : "pink",
      })
    }
    return list
  }, [])

  // Imperative animation by updating transform on each pair <g>
  const refs = useRef<Array<SVGGElement | null>>([])

  useEffect(() => {
    let raf = 0
    const margin = 6 // wrap margin so pairs don't pop at edges
    const step = () => {
      for (let i = 0; i < pairs.length; i++) {
        const p = pairs[i]
        p.x += p.vx
        p.y += p.vy
        // edge wrap
        if (p.x < -margin) p.x = 100 + margin
        if (p.x > 100 + margin) p.x = -margin
        if (p.y < -margin) p.y = 100 + margin
        if (p.y > 100 + margin) p.y = -margin

        const g = refs.current[i]
        if (g) g.setAttribute("transform", `translate(${p.x} ${p.y})`)
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [pairs])

  return (
    <svg
      className="pointer-events-none h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {pairs.map((p, i) => {
        const c1 = p.c1 === "pink" ? PINK : PURPLE
        const c2 = p.c2 === "pink" ? PINK : PURPLE
        // tiny equal-sided hex radius
        const r = 0.9
        const a1x = -p.dx / 2
        const a1y = -p.dy / 2
        const a2x = p.dx / 2
        const a2y = p.dy / 2
        return (
          <g key={i} ref={(el) => (refs.current[i] = el)} transform={`translate(${p.x} ${p.y})`} opacity={0.85}>
            {/* faint connecting line */}
            <line
              x1={a1x}
              y1={a1y}
              x2={a2x}
              y2={a2y}
              stroke={i % 2 === 0 ? c1 : c2}
              strokeWidth={0.18}
              strokeOpacity={0.18}
              vectorEffect="non-scaling-stroke"
            />
            {/* hexagon A */}
            <polygon
              points={hexPoints(a1x, a1y, r)}
              fill="none"
              stroke={c1}
              strokeWidth={0.22}
              strokeOpacity={0.32} // slightly more visible but still subtle
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* hexagon B */}
            <polygon
              points={hexPoints(a2x, a2y, r)}
              fill="none"
              stroke={c2}
              strokeWidth={0.22}
              strokeOpacity={0.32}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      })}
    </svg>
  )
}

// Build a flat-top regular hexagon (equal sides)
function hexPoints(cx: number, cy: number, r: number) {
  const start = Math.PI / 6
  const pts: string[] = []
  for (let k = 0; k < 6; k++) {
    const a = start + (Math.PI / 3) * k
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    pts.push(`${x},${y}`)
  }
  return pts.join(" ")
}

export { FloatingChains }
