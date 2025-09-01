"use client"

import type { PropsWithChildren, ReactNode } from "react"
import { cn } from "@/lib/utils"

type HexCardProps = {
  title: string
  subtitle?: string
  icon?: ReactNode
  color?: "pink" | "purple"
  className?: string
}

export function HexCard({
  title,
  subtitle,
  icon,
  color = "purple",
  className,
  children,
}: PropsWithChildren<HexCardProps>) {
  const gradient = color === "pink" ? "from-[#ec4899] to-[#d946ef]" : "from-[#7c3aed] to-[#1d4ed8]"

  return (
    <div
      className={cn("relative transition-transform duration-300", "hover:-translate-y-1", className)}
      aria-label={title}
    >
      {/* Gradient border with low default opacity; brighter on hover */}
      <div className={cn("p-[2px] rounded-[16px] bg-gradient-to-r opacity-60 hover:opacity-100", gradient, "clip-hex")}>
        <div className="rounded-[14px] h-full w-full bg-[rgb(8,10,16)]/90 border border-white/5 p-6">
          <div className="flex items-start gap-4">
            {icon ? (
              <div className={cn("rounded-full p-2 bg-gradient-to-r text-white", gradient)} aria-hidden="true">
                {icon}
              </div>
            ) : null}
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg leading-6">{title}</h3>
              {subtitle ? <p className="text-white/70 text-sm leading-relaxed mt-2">{subtitle}</p> : null}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
