"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = { reelIds: string[] }

export function InstagramCarousel({ reelIds }: Props) {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + reelIds.length) % reelIds.length)
  const next = () => setIndex((i) => (i + 1) % reelIds.length)

  const id = reelIds[index]
  const src = `https://www.instagram.com/reel/${id}/embed`

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="relative w-full max-w-md md:max-w-2xl aspect-[9/16]">
        <iframe
          src={src}
          className="absolute inset-0 h-full w-full rounded-xl border border-white/10"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups"
          title={`Instagram reel ${id}`}
        />
      </div>
      <div className="flex items-center gap-3">
        <Button variant="secondary" onClick={prev} className="bg-white/10 text-white hover:bg-white/20">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button onClick={next} className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
