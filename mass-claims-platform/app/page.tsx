import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Scale, FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Scale className="h-6 w-6" />
            <span>ClaimCollective</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Benefits
            </Link>
            <Link href="#resources" className="text-sm font-medium hover:underline underline-offset-4">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Collective Power for Workplace Justice
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Join forces with others to address unfair practices by secondment agencies. Together, we can make a
                  stronger case and seek fair compensation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/claims/new">
                    <Button size="lg">Start Your Claim</Button>
                  </Link>
                  <Link href="/claims/join">
                    <Button variant="outline" size="lg">
                      Join Existing Claims
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center p-6">
                  <Users className="h-16 w-16 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Currently Active</h3>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold">1,240+</p>
                        <p className="text-sm text-muted-foreground">Users</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold">85+</p>
                        <p className="text-sm text-muted-foreground">Active Claims</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold">€2.4M+</p>
                        <p className="text-sm text-muted-foreground">Claimed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to join forces with others facing similar issues with secondment agencies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>1. Submit Your Claim</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provide details about your experience with the secondment agency and the issues you've faced.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>2. Connect with Others</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join forces with others who have similar claims against the same agency to strengthen your case.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary/10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>3. Pursue Justice</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access legal resources, share evidence, and coordinate your approach for maximum impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Benefits of Collective Claims
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Why joining forces makes a difference when challenging secondment agencies.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Stronger Together",
                  description:
                    "Multiple similar claims demonstrate patterns of behavior that are harder for agencies to dismiss.",
                },
                {
                  title: "Shared Resources",
                  description:
                    "Pool knowledge, evidence, and potentially legal costs to make your case more effective.",
                },
                {
                  title: "Greater Visibility",
                  description:
                    "Collective claims often receive more attention from agencies, media, and regulatory bodies.",
                },
                {
                  title: "Emotional Support",
                  description: "Connect with others who understand your situation and can provide moral support.",
                },
                {
                  title: "Legal Advantages",
                  description:
                    "In many jurisdictions, collective claims may have procedural benefits or special legal provisions.",
                },
                {
                  title: "Systemic Change",
                  description:
                    "Beyond individual compensation, collective action can drive industry-wide improvements.",
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources & Support</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access information and tools to help strengthen your claim.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Legal Information</CardTitle>
                  <CardDescription>Understand your rights and the legal framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Employment contract analysis</li>
                    <li>• Relevant labor laws</li>
                    <li>• Precedent cases</li>
                    <li>• Regulatory frameworks</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/legal">
                    <Button variant="outline" className="w-full">
                      Access Legal Resources
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Document Templates</CardTitle>
                  <CardDescription>Ready-to-use templates for your claim process</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Formal complaint letters</li>
                    <li>• Evidence documentation forms</li>
                    <li>• Timeline trackers</li>
                    <li>• Agency communication templates</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/templates">
                    <Button variant="outline" className="w-full">
                      Download Templates
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expert Network</CardTitle>
                  <CardDescription>Connect with professionals who can help</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Employment lawyers</li>
                    <li>• Labor rights advocates</li>
                    <li>• Former agency employees</li>
                    <li>• Union representatives</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/resources/experts">
                    <Button variant="outline" className="w-full">
                      Find Experts
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Take Action?</h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of others who are standing up for their rights against unfair secondment practices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/signup">
                  <Button size="lg" variant="secondary">
                    Create an Account
                  </Button>
                </Link>
                <Link href="/claims/browse">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary/10 hover:bg-primary/20 border-primary-foreground/20"
                  >
                    Browse Active Claims
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ClaimCollective. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

