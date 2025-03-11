"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Scale, ArrowLeft, Upload } from "lucide-react"

export default function NewClaimPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="font-bold text-xl flex items-center gap-2">
              <Scale className="h-6 w-6" />
              <span>ClaimCollective</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container py-6 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">File a New Claim</h1>
          <p className="text-muted-foreground">
            Complete the form below to start your claim against a secondment agency.
          </p>
        </div>

        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step === i
                    ? "bg-primary text-primary-foreground"
                    : step > i
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {i}
              </div>
              <span className={`text-xs ${step === i ? "font-medium" : "text-muted-foreground"}`}>
                {i === 1 ? "Basic Info" : i === 2 ? "Claim Details" : i === 3 ? "Evidence" : "Review"}
              </span>
            </div>
          ))}
        </div>

        <Card>
          <form onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()}>
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Provide information about the secondment agency and your employment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="agency-name">Agency Name</Label>
                    <Input id="agency-name" placeholder="e.g. Randstad, Adecco, etc." required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employment-start">Employment Start Date</Label>
                      <Input id="employment-start" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employment-end">Employment End Date</Label>
                      <Input id="employment-end" type="date" />
                      <div className="flex items-center space-x-2 mt-1">
                        <Checkbox id="still-employed" />
                        <Label htmlFor="still-employed" className="text-sm font-normal">
                          I am still employed
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="Your position at the company" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-company">Client Company (where you were placed)</Label>
                    <Input id="client-company" placeholder="The company where you worked" required />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="button" onClick={nextStep}>
                    Continue
                  </Button>
                </CardFooter>
              </>
            )}

            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Claim Details</CardTitle>
                  <CardDescription>Describe the issue and what you're claiming</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="claim-type">Type of Claim</Label>
                    <Select required>
                      <SelectTrigger id="claim-type">
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wage-dispute">Wage Dispute</SelectItem>
                        <SelectItem value="unpaid-overtime">Unpaid Overtime</SelectItem>
                        <SelectItem value="holiday-pay">Holiday Pay</SelectItem>
                        <SelectItem value="contract-breach">Contract Breach</SelectItem>
                        <SelectItem value="wrongful-termination">Wrongful Termination</SelectItem>
                        <SelectItem value="benefits-dispute">Benefits Dispute</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="claim-amount">Claim Amount (if applicable)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2">€</span>
                      <Input id="claim-amount" type="number" className="pl-8" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="claim-description">Describe your claim in detail</Label>
                    <Textarea
                      id="claim-description"
                      placeholder="Provide a detailed description of the issue, including relevant dates, conversations, and how it has affected you."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Have you attempted to resolve this with the agency?</Label>
                    <RadioGroup defaultValue="yes">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="resolution-yes" />
                        <Label htmlFor="resolution-yes" className="font-normal">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="resolution-no" />
                        <Label htmlFor="resolution-no" className="font-normal">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Continue
                  </Button>
                </CardFooter>
              </>
            )}

            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Evidence Upload</CardTitle>
                  <CardDescription>Upload documents to support your claim</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Employment Contract</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Drag and drop your contract here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, JPG, or PNG (max 10MB)</p>
                      <Button type="button" variant="outline" size="sm" className="mt-4">
                        Browse Files
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Pay Slips / Statements</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Drag and drop your pay slips here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, JPG, or PNG (max 10MB)</p>
                      <Button type="button" variant="outline" size="sm" className="mt-4">
                        Browse Files
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Evidence (optional)</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Drag and drop additional evidence here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, JPG, or PNG (max 10MB)</p>
                      <Button type="button" variant="outline" size="sm" className="mt-4">
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Continue
                  </Button>
                </CardFooter>
              </>
            )}

            {step === 4 && (
              <>
                <CardHeader>
                  <CardTitle>Review & Submit</CardTitle>
                  <CardDescription>Review your claim before submitting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Basic Information</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="text-muted-foreground">Agency Name:</div>
                      <div>Randstad Professionals</div>
                      <div className="text-muted-foreground">Employment Period:</div>
                      <div>Jan 15, 2024 - Present</div>
                      <div className="text-muted-foreground">Job Title:</div>
                      <div>Software Developer</div>
                      <div className="text-muted-foreground">Client Company:</div>
                      <div>TechCorp Solutions</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Claim Details</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="text-muted-foreground">Claim Type:</div>
                      <div>Unpaid Overtime</div>
                      <div className="text-muted-foreground">Claim Amount:</div>
                      <div>€4,250</div>
                      <div className="text-muted-foreground">Resolution Attempted:</div>
                      <div>Yes</div>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="text-muted-foreground mb-1">Description:</div>
                      <div className="p-3 bg-muted rounded-md">
                        I have been consistently working overtime (10-15 hours per week) for the past 3 months, but the
                        agency has refused to pay for these additional hours despite them being requested by the client
                        company. I have email evidence of the requests and my timesheet submissions.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Uploaded Evidence</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="text-muted-foreground">Employment Contract:</div>
                      <div className="text-primary">contract-randstad-2024.pdf</div>
                      <div className="text-muted-foreground">Pay Slips:</div>
                      <div className="text-primary">payslips-jan-mar-2024.pdf</div>
                      <div className="text-muted-foreground">Additional Evidence:</div>
                      <div className="text-primary">email-overtime-requests.pdf</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        I confirm that all information provided is accurate and truthful to the best of my knowledge.
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" required />
                      <Label htmlFor="privacy" className="text-sm font-normal">
                        I agree to the platform's privacy policy and understand my information may be shared with other
                        claimants in similar situations.
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Claim"}
                  </Button>
                </CardFooter>
              </>
            )}
          </form>
        </Card>
      </div>
    </div>
  )
}

