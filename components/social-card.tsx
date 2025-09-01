"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HexCard } from "./hex-card"

type Props = {
  title: string
  description: string
  href: string
  cta: string
  color?: "pink" | "purple"
  icon?: React.ReactNode
}

export function SocialCard({ title, description, href, cta, color = "purple", icon }: Props) {
  return (
    <HexCard title={title} subtitle={description} color={color} icon={icon}>
      <div className="mt-5">
        <Button asChild className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {cta}
          </Link>
        </Button>
      </div>
    </HexCard>
  )
}
