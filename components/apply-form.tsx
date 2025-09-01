"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function ApplyForm() {
  const [agree, setAgree] = useState(false)
  const [subscribe, setSubscribe] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Application submitted! We’ll get back to you within 48 hours.")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-white">Full Name *</Label>
          <Input
            required
            placeholder="Enter your full name"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white">Email Address *</Label>
          <Input
            type="email"
            required
            placeholder="your.email@university.edu"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white">Mobile Number *</Label>
          <Input
            required
            placeholder="+1 (555) 123-4567"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white">University/College Name *</Label>
          <Input
            required
            placeholder="Enter your university name"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white">Year of Study</Label>
          <Select>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select your year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1st Year</SelectItem>
              <SelectItem value="2">2nd Year</SelectItem>
              <SelectItem value="3">3rd Year</SelectItem>
              <SelectItem value="4">4th Year</SelectItem>
              <SelectItem value="pg">Postgraduate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-white">Field of Study</Label>
          <Input
            placeholder="Computer Science, Engineering, Business, etc."
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className="text-white">Blockchain Experience</Label>
          <Select>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className="text-white">Why do you want to start a Chain Chapter? *</Label>
          <Textarea
            required
            rows={4}
            placeholder="Tell us about your motivation and vision for bringing blockchain education to your campus..."
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className="text-white">What are your goals for the chapter?</Label>
          <Textarea
            rows={4}
            placeholder="Describe what you hope to achieve with your university chapter..."
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="agree" checked={agree} onCheckedChange={(v) => setAgree(!!v)} />
        <Label htmlFor="agree" className="text-white/80">
          I agree to the Chain Chapter ambassador terms and conditions *
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="subscribe" checked={subscribe} onCheckedChange={(v) => setSubscribe(!!v)} />
        <Label htmlFor="subscribe" className="text-white/80">
          Subscribe to updates about new chapters and ambassador resources
        </Label>
      </div>

      <Button
        type="submit"
        disabled={!agree}
        className="w-full md:w-auto bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white"
      >
        Submit Application
      </Button>
    </form>
  )
}
