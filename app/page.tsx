"use client"

import { ChainAnimation } from "@/components/chain-animation"
import { BackgroundHexGrid } from "@/components/background-hex-grid"
import { HexCard } from "@/components/hex-card"
import { SocialCard } from "@/components/social-card"
import { InstagramCarousel } from "@/components/instagram-carousel"
import { ApplyForm } from "@/components/apply-form"
import { FloatingChains } from "@/components/floating-chains"
import {
  Trophy,
  Presentation,
  Rocket,
  Users,
  BookOpen,
  Target,
  Camera,
  MessageCircle,
  Twitter,
  Linkedin,
} from "lucide-react"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* subtle background hex grid */}
      <div className="absolute inset-0 -z-20">
        <BackgroundHexGrid />
      </div>
      {/* floating chains overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingChains />
      </div>
      {/* full-page chain rails */}
      <ChainAnimation side="left" />
      <ChainAnimation /> {/* defaults to right */}
      {/* content wrapper now above overlays */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 text-center space-y-16">
        {/* Top: headings only (logo removed) */}
        <div className="flex flex-col items-center gap-4">
          {/* previously: <Image ... /> */}
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#7c3aed]">Chain Chapter</h1>
          <p className="text-2xl font-semibold text-[#ec4899]">The Community of Future Builders</p>
          <p className="text-white/90 leading-relaxed">
            Join thousands of students in the premier blockchain education community. Participate in hackathons, attend
            seminars, join webinars, and unlock career opportunities in Web3.
          </p>
        </div>

        {/* Opportunities */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7c3aed]">Opportunities at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <HexCard
              color="purple"
              title="Hackathons & Competitions"
              subtitle="Participate in blockchain hackathons and coding contests. Build projects, win prizes, and showcase your skills."
              icon={<Trophy className="h-5 w-5" />}
              className="w-full max-w-sm"
            />
            <HexCard
              color="pink"
              title="Seminars & Webinars"
              subtitle="Attend expert-led seminars, webinars, and talks on blockchain, DeFi, and emerging tech."
              icon={<Presentation className="h-5 w-5" />}
              className="w-full max-w-sm"
            />
            <HexCard
              color="purple"
              title="Career Opportunities"
              subtitle="Explore internships, placements, and startup roles with industry partners in Web3."
              icon={<Rocket className="h-5 w-5" />}
              className="w-full max-w-sm"
            />
            <HexCard
              color="pink"
              title="Student Network"
              subtitle="Connect with like‑minded students from universities worldwide and grow together."
              icon={<Users className="h-5 w-5" />}
              className="w-full max-w-sm"
            />
            <HexCard
              color="purple"
              title="Educational Resources"
              subtitle="Access curated learning paths, tutorials, and guides from basics to advanced concepts."
              icon={<BookOpen className="h-5 w-5" />}
              className="w-full max-w-sm"
            />
            <HexCard
              color="pink"
              title="Hands‑On Events"
              subtitle="Join workshops and build real blockchain projects to level up your technical skills."
              icon={<Target className="h-5 w-5" />}
              className="w-full max-w-sm"
            />
          </div>
        </section>

        {/* Events */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ec4899]">Upcoming Events</h2>
          <InstagramCarousel reelIds={["DN8sZYRku8e", "DN5I5IjkgxZ"]} />
        </section>

        {/* Connect */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7c3aed]">Connect with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <SocialCard
              color="purple"
              title="Instagram Community"
              description="Daily blockchain insights, event recaps, and student spotlights."
              href="https://instagram.com/chain_chapter"
              cta="Follow Instagram"
              icon={<Camera className="h-5 w-5" />}
            />
            <SocialCard
              color="pink"
              title="Telegram Group"
              description="Instant updates about events, hackathons, and opportunities."
              href="https://t.me/+acMEPt9mq0k1Njll"
              cta="Join Telegram"
              icon={<MessageCircle className="h-5 w-5" />}
            />
            <SocialCard
              color="purple"
              title="Twitter Community"
              description="Announcements and conversations with the broader Web3 community."
              href="https://x.com/CHAIN_CHAPTER"
              cta="Follow Twitter"
              icon={<Twitter className="h-5 w-5" />}
            />
            <div className="md:col-span-3 grid place-items-center w-full">
              <div className="w-full max-w-sm">
                <SocialCard
                  color="pink"
                  title="LinkedIn Network"
                  description="Professional updates and opportunities for students and alumni."
                  href="https://www.linkedin.com/in/chainchapter"
                  cta="Connect LinkedIn"
                  icon={<Linkedin className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ec4899]">Stay Updated</h2>
          <p className="text-white/90">Get weekly updates about upcoming events, hackathons, and opportunities.</p>
          <form
            className="mx-auto flex w-full max-w-xl items-center gap-3 justify-center"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks! You’re subscribed.")
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
            />
            <button
              type="submit"
              className="rounded-full px-5 py-3 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white font-medium"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Campus */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7c3aed]">Chain Chapter at Your Campus</h2>
          <p className="text-white/90">
            Want to bring blockchain education to your campus? Apply to become a Chain Chapter ambassador and lead the
            Web3 revolution at your campus!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Benefits */}
            <div className="grid grid-cols-1 gap-4 justify-items-center">
              <HexCard
                color="purple"
                title="Official Recognition"
                subtitle="Become an official Chain Chapter ambassador with certification."
                className="w-full max-w-md"
              />
              <HexCard
                color="pink"
                title="Expert Speakers"
                subtitle="Access to industry experts and speakers for your university events."
                className="w-full max-w-md"
              />
              <HexCard
                color="purple"
                title="Educational Resources"
                subtitle="Complete curriculum, workshop materials, and learning resources."
                className="w-full max-w-md"
              />
              <HexCard
                color="pink"
                title="Global Network"
                subtitle="Connect with chapter leads from universities worldwide."
                className="w-full max-w-md"
              />
              <HexCard
                color="purple"
                title="Leadership Experience"
                subtitle="Build valuable leadership skills and enhance your resume."
                className="w-full max-w-md"
              />
            </div>

            {/* Application Form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Apply to Start a Chapter</h3>
              <ApplyForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-2 space-y-2">
          <p className="font-semibold">Chain Chapter</p>
          <p className="text-white/85">
            Empowering students worldwide through blockchain education, hackathons, seminars, and career opportunities.
            Building the future of Web3 with student innovation.
          </p>
          <p className="text-white/60 text-sm">
            © 2024 Chain Chapter. All rights reserved. Building the future of blockchain education.
          </p>
        </footer>
      </div>
    </main>
  )
}
