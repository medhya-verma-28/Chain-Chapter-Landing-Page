"use client"

import { useEffect, useRef } from "react"

export function ChainAnimation({ side = "right" }: { side?: "right" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    let raf = 0
    const update = () => {
      const vh = window.innerHeight
      const centerY = vh / 2
      itemRefs.current.forEach((el) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const y = r.top + r.height / 2
        const dist = Math.abs(y - centerY)
        const t = Math.max(0, 1 - dist / (vh * 0.45))
        const scale = 0.8 + t * 0.9 // scales up to ~1.7 at center
        const opacity = 0.35 + t * 0.65
        const blur = Math.max(0, 2 - t * 2)

        el.style.transform = `scale(${scale})`
        el.style.opacity = String(opacity)
        el.style.filter = `blur(${blur}px)`
        el.style.zIndex = String(Math.round(scale * 100))
      })
      raf = 0
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
    }
  }, [])

  const links = Array.from({ length: 18 })

  return (
    <div
      ref={containerRef}
      className={`fixed ${side === "right" ? "right-3 md:right-6" : "left-3 md:left-6"} top-0 bottom-0 w-24 md:w-28 pointer-events-none select-none z-40`}
      aria-hidden="true"
    >
      <div className="h-full flex flex-col items-center justify-center gap-3">
        {links.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) itemRefs.current[i] = el
            }}
          >
            <HexLink index={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

function HexLink({ index }: { index: number }) {
  const id = `g-${index}`
  return (
    <svg width="84" height="72" viewBox="0 0 100 86">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <polygon points="25,3 75,3 97,43 75,83 25,83 3,43" fill="none" stroke={`url(#${id})`} strokeWidth="3" />
      <circle cx="50" cy="43" r="14" fill="none" stroke={`url(#${id})`} strokeWidth="3" />
    </svg>
  )
}
