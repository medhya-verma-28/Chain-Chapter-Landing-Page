"use client"

import { useEffect, useRef } from "react"

export function BackgroundHexGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1))

    function draw() {
      const w = (canvas.width = canvas.clientWidth * DPR)
      const h = (canvas.height = canvas.clientHeight * DPR)
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = "rgba(255,255,255,0.06)"
      ctx.lineWidth = 1

      const size = 24 * DPR
      const stepX = size * 3
      const stepY = Math.sqrt(3) * size

      for (let y = -stepY; y < h + stepY; y += stepY) {
        for (let x = -stepX; x < w + stepX; x += stepX) {
          const offset = Math.floor(y / stepY) % 2 === 0 ? 0 : 1.5 * size
          hex(ctx, x + offset, y, size)
        }
      }
    }

    function hex(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i
        const x = cx + r * Math.cos(a)
        const y = cy + r * Math.sin(a)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.style.width = `${parent.clientWidth}px`
      canvas.style.height = `${parent.clientHeight}px`
      draw()
    }

    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
}
