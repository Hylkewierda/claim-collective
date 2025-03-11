"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, FileText, MessageSquare, Plus, Scale, Settings, Users } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("my-claims")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Scale className="h-6 w-6" />
            <span>ClaimCollective</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-6">
        <aside className="hidden md:block">
          <nav className="grid items-start gap-2">
            <Link href="/dashboard">
              <Button variant="secondary" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/claims/new">
              <Button variant="ghost" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                New Claim
              </Button>
            </Link>
            <Link href="/claims/browse">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Browse Claims
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Resources
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
        </aside>
        <main className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <Link href="/claims/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Claim
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="my-claims" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="my-claims">My Claims</TabsTrigger>
              <TabsTrigger value="joined-claims">Joined Claims</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>

            <TabsContent value="my-claims" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Unpaid Overtime Claim</CardTitle>
                  <CardDescription>
                    <Badge className="mr-2">In Progress</Badge>
                    <span className="text-muted-foreground">Filed on March 5, 2025</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Agency:</span>
                      <span className="font-medium">Randstad Professionals</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Claim Type:</span>
                      <span className="font-medium">Wage Dispute</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">€4,250</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Similar Claims:</span>
                      <span className="font-medium">24 active</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Update Claim</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contract Violation</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      Draft
                    </Badge>
                    <span className="text-muted-foreground">Last updated on March 10, 2025</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Agency:</span>
                      <span className="font-medium">TempForce Solutions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Claim Type:</span>
                      <span className="font-medium">Contract Breach</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">Not specified</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Similar Claims:</span>
                      <span className="font-medium">12 active</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Complete & Submit</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="joined-claims" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Class Action: Holiday Pay Discrepancies</CardTitle>
                  <CardDescription>
                    <Badge className="mr-2 bg-green-600">Active</Badge>
                    <span className="text-muted-foreground">Joined on February 15, 2025</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lead Claimant:</span>
                      <span className="font-medium">Maria Rodriguez</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Agency:</span>
                      <span className="font-medium">Randstad Professionals</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Claim Type:</span>
                      <span className="font-medium">Holiday Pay</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="font-medium">142 claimants</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium">Legal review in progress</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Message Group</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="recommended" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pension Contributions Dispute</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">
                      Recommended
                    </Badge>
                    <span className="text-muted-foreground">15 people with similar claims</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Agency:</span>
                      <span className="font-medium">Randstad Professionals</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Claim Type:</span>
                      <span className="font-medium">Benefits Dispute</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lead Claimant:</span>
                      <span className="font-medium">Thomas Weber</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Success Rate:</span>
                      <span className="font-medium">78% similar cases</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Join Claim</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Wrongful Termination Group Claim</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">
                      Recommended
                    </Badge>
                    <span className="text-muted-foreground">8 people with similar claims</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Agency:</span>
                      <span className="font-medium">StaffLink International</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Claim Type:</span>
                      <span className="font-medium">Wrongful Termination</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lead Claimant:</span>
                      <span className="font-medium">Sarah Johnson</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Success Rate:</span>
                      <span className="font-medium">65% similar cases</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Join Claim</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Total Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Joined Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Total Claimed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€4,250</div>
                <p className="text-xs text-muted-foreground">+€4,250 from last month</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

