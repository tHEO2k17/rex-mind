import Link from "next/link"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import {
  MessageCircle,
  Brain,
  User,
  Sparkles,
  Target,
  Users,
  ArrowRight,
  Lightbulb,
  Compass,
} from "lucide-react"
import { ThemeToggle } from "@/shared/components/theme-toggle"

const problems = [
  {
    icon: Lightbulb,
    title: "Lack of Self Awareness",
    description: "Most people operate on autopilot without understanding their patterns.",
  },
  {
    icon: Sparkles,
    title: "Untapped Talents",
    description: "Hidden abilities remain dormant without proper discovery systems.",
  },
  {
    icon: Compass,
    title: "No Personalized Guidance",
    description: "Generic advice fails to address individual cognitive differences.",
  },
]

const features = [
  {
    icon: MessageCircle,
    title: "AI Mentor",
    description: "Personal AI coach that understands your patterns and guides your growth.",
  },
  {
    icon: Brain,
    title: "Cognitive Insights",
    description: "Discover behavioral patterns and optimize your mental performance.",
  },
  {
    icon: User,
    title: "Identity Builder",
    description: "Design and build your ideal future self with structured frameworks.",
  },
  {
    icon: Sparkles,
    title: "Talent Discovery",
    description: "AI-powered analysis to uncover your hidden strengths and abilities.",
  },
  {
    icon: Target,
    title: "Growth Challenges",
    description: "Structured programs to build discipline and achieve breakthroughs.",
  },
  {
    icon: Users,
    title: "Community Circles",
    description: "Connect with growth-minded peers for accountability and support.",
  },
]

const steps = [
  {
    step: 1,
    title: "Reflect",
    description: "Users journal and check in daily to provide the AI with behavioral data.",
  },
  {
    step: 2,
    title: "Analyze",
    description: "AI analyzes patterns, identifies talents, and detects growth opportunities.",
  },
  {
    step: 3,
    title: "Optimize",
    description: "System recommends personalized growth paths aligned with your identity.",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    quote: "RexMind helped me discover patterns I never knew existed. My productivity increased by 40%.",
  },
  {
    name: "Marcus Johnson",
    role: "Entrepreneur",
    quote: "The identity builder changed how I see myself. I finally feel aligned with my goals.",
  },
  {
    name: "Elena Rodriguez",
    role: "Software Engineer",
    quote: "The AI mentor is like having a personal coach available 24/7. Absolutely transformative.",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-sm font-bold text-primary-foreground">R</span>
            </div>
            <span className="text-xl font-semibold text-foreground">RexMind</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Your Mind Deserves an Operating System.
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
              RexMind is an AI-powered system that helps you understand yourself, discover your talents, and build your highest identity.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  Start Your Growth System
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 overflow-hidden rounded-lg border border-border bg-secondary p-2 shadow-lg">
            <div className="rounded-md bg-background p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Welcome back, Theo</p>
                    <p className="text-sm text-muted-foreground">Your cognitive growth system is active.</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-md border border-border bg-background p-4">
                    <p className="text-sm font-medium text-muted-foreground">Identity Alignment</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">72%</p>
                    <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[72%] rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="rounded-md border border-border bg-background p-4">
                    <p className="text-sm font-medium text-muted-foreground">Talents Discovered</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">5</p>
                    <p className="mt-2 text-sm text-primary">+2 this week</p>
                  </div>
                  <div className="rounded-md border border-border bg-background p-4">
                    <p className="text-sm font-medium text-muted-foreground">Growth Streak</p>
                    <p className="mt-1 text-2xl font-bold text-foreground">14 days</p>
                    <p className="mt-2 text-sm text-muted-foreground">Personal best</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Most people never reach their real potential.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((problem) => (
              <Card key={problem.title} className="border border-border">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                    <problem.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-b border-border bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Meet Your Personal Cognitive Operating System.
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              RexMind combines AI mentorship, identity development, talent discovery, and behavioral insights into one powerful platform for personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Everything you need to unlock your potential.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border border-border">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-b border-border bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              How RexMind Works
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Trusted by growth-focused individuals
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                      <span className="text-sm font-medium text-foreground">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Start Building Your Highest Self
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of individuals who are using RexMind to unlock their true potential.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/register">
                  Join Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-lg font-semibold text-foreground">RexMind</span>
            </div>
            <p className="text-sm text-muted-foreground">
              2024 RexMind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
