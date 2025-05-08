"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AlertCircle } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PageHeader } from "@/components/dashboard/page-header"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader } from "@/components/dashboard/cards"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

import { BasicInfoForm } from "./components/BasicInfoForm"
import { ParticipantsForm } from "./components/ParticipantsForm"
import { LocationForm } from "./components/LocationForm"
import { EvidenceForm } from "./components/EvidenceForm"

// Mock data - replace with actual data in production
const recordDefinitions = [
  {
    id: "1",
    name: "Fastest 100m Sprint",
    category: "Speed",
    unit: "seconds",
    description: "Time taken to sprint 100 meters"
  },
  {
    id: "2",
    name: "Highest Jump",
    category: "Height",
    unit: "meters",
    description: "Maximum vertical height achieved in a jump"
  },
  {
    id: "3",
    name: "Longest Distance Run in 24 Hours",
    category: "Endurance",
    unit: "kilometers",
    description: "Total distance covered running in 24 hours"
  },
  {
    id: "4",
    name: "Most Push-ups in One Hour",
    category: "Strength",
    unit: "repetitions",
    description: "Number of push-ups completed in one hour"
  },
  {
    id: "5",
    name: "Longest Time Holding Breath Underwater",
    category: "Endurance",
    unit: "minutes",
    description: "Duration of holding breath underwater"
  }
]

// Form schema
const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  definition: z.string({ required_error: "Please select a record definition" }),
  record_date: z.date({ required_error: "Please select a date" }),
  value: z.string().min(1, { message: "Record value is required" }),
  details: z.string().min(10, { message: "Details must be at least 10 characters" }),
  vkey: z.string().min(8, { message: "VKey must be at least 8 characters" }),
  
  participants: z.array(z.object({
    name: z.string().min(1),
    country: z.string().length(2).optional(),
    birth_date: z.date().optional().nullable()
  })).min(1, { message: "At least one participant is required" }),
  
  location: z.object({
    address: z.string().optional(),
    city: z.string().min(1),
    state: z.string().optional(),
    country: z.string().min(1),
    pincode: z.string().optional()
  }),
  
  tags: z.array(z.string()).optional(),
  
  sources: z.array(z.object({
    source_url: z.string().url(),
    description: z.string().optional()
  })).optional(),
  
  assets: z.array(z.object({
    file: z.any(),
    file_type: z.enum(['image', 'video', 'pdf', 'certificate', 'other']),
    description: z.string().optional()
  })).optional()
})

type FormValues = z.infer<typeof formSchema>

export default function SubmitRecordPage() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<FormValues | null>(null)
  const [activeTab, setActiveTab] = useState("basic")

  const tabs = ["basic", "participants", "location", "evidence"]
  const isLastTab = activeTab === tabs[tabs.length - 1]
  const isFirstTab = activeTab === tabs[0]

  // Validation schema for each tab
  const tabValidationSchema = {
    basic: z.object({
      title: formSchema.shape.title,
      definition: formSchema.shape.definition,
      record_date: formSchema.shape.record_date,
      value: formSchema.shape.value,
      details: formSchema.shape.details,
    }),
    participants: z.object({
      participants: formSchema.shape.participants,
    }),
    location: z.object({
      location: formSchema.shape.location,
    }),
    evidence: z.object({
      sources: formSchema.shape.sources,
      assets: formSchema.shape.assets,
      vkey: formSchema.shape.vkey,
    }),
  }

  const handleNext = async () => {
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex < tabs.length - 1) {
      // Get the fields to validate for the current tab
      const currentTabSchema = tabValidationSchema[activeTab as keyof typeof tabValidationSchema]
      
      try {
        // Validate only the fields for the current tab
        const result = await form.trigger(Object.keys(currentTabSchema.shape) as any)
        
        if (result) {
          setActiveTab(tabs[currentIndex + 1])
        }
      } catch (error) {
        // Validation failed, stay on current tab
        console.error('Validation failed:', error)
      }
    }
  }

  const handleBack = () => {
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1])
    }
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      details: "",
      vkey: "",
      participants: [{ name: "", country: "", birth_date: null }],
      location: {
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
      },
      sources: [],
      assets: []
    },
  })

  function onSubmit(data: FormValues) {
    setFormData(data)
    setShowConfirmation(true)
  }

  function handleConfirm() {
    console.log("Submitting record:", formData)
    setShowConfirmation(false)
    form.reset()
  }

  // Helper function to check if a tab has errors
  const hasTabErrors = (fields: (keyof FormValues)[]) => {
    const formState = form.formState.errors
    return fields.some(field => {
      if (field === 'participants' || field === 'location' || field === 'sources' || field === 'assets') {
        return !!formState[field]
      }
      return !!formState[field]
    })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Submit Record"
        description="Submit a new world record for verification"
        action={
          <Image
            src="/images/world-records-logo.png"
            alt="World Records Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        }
      />

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Fill out all required information across all sections before submitting. Your record will be reviewed by our team.
        </AlertDescription>
      </Alert>

      <WRCard>
        <WRCardHeader
          title="Record Details"
          description="Fill in all the required information about the record attempt"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="basic" className="relative">
                    Basic Info
                    {hasTabErrors(['title', 'definition', 'record_date', 'value']) && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center">!</Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="participants" className="relative">
                    Participants
                    {hasTabErrors(['participants']) && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center">!</Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="location" className="relative">
                    Location
                    {hasTabErrors(['location']) && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center">!</Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="evidence" className="relative">
                    Evidence
                    {hasTabErrors(['sources', 'assets']) && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center">!</Badge>
                    )}
                  </TabsTrigger>
                </TabsList>

                <div className="space-y-6">
                  <TabsContent value="basic">
                    <BasicInfoForm form={form} recordDefinitions={recordDefinitions} />
                  </TabsContent>

                  <TabsContent value="participants">
                    <ParticipantsForm form={form} />
                  </TabsContent>

                  <TabsContent value="location">
                    <LocationForm form={form} />
                  </TabsContent>

                  <TabsContent value="evidence">
                    <EvidenceForm form={form} />
                  </TabsContent>
                </div>
              </Tabs>

              <Card className="p-6">
                <FormField
                  control={form.control}
                  name="vkey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>VKey</FormLabel>
                      <FormControl>
                        <Input label="" placeholder="Enter your verification key" {...field} />
                      </FormControl>
                      <FormDescription>Enter the verification key assigned to you</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
            </div>

            <div className="py-6">
              <div className="container mx-auto px-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  <Button 
                    type="button" 
                    onClick={handleBack}
                    disabled={isFirstTab}
                    variant="outline"
                    className="w-[120px]"
                  >
                    Back
                  </Button>
                  <div className="flex gap-6">
                    {!isLastTab ? (
                      <WRButton 
                        type="button" 
                        onClick={handleNext}
                        variant="secondary"
                        className="w-[120px]"
                      >
                        Next
                      </WRButton>
                    ) : (
                      <>
                        <Button variant="outline" type="button" onClick={() => form.reset()}>
                          Reset Form
                        </Button>
                        <WRButton type="submit" variant="secondary">
                          Submit Record
                        </WRButton>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </WRCard>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-[#1e3a8a]">Confirm Submission</DialogTitle>
            <DialogDescription>
              Please review your record submission details carefully before confirming.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[400px]">
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#1e3a8a]">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="font-medium">Record Title:</div>
                    <div>{formData?.title}</div>
                    <div className="font-medium">Record Definition:</div>
                    <div>{recordDefinitions.find((d) => d.id === formData?.definition)?.name}</div>
                    <div className="font-medium">Date of Attempt:</div>
                    <div>{formData?.record_date ? format(formData.record_date, "PPP") : ""}</div>
                    <div className="font-medium">Record Value:</div>
                    <div>{formData?.value}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-[#1e3a8a]">Location</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="font-medium">City:</div>
                    <div>{formData?.location?.city}</div>
                    <div className="font-medium">Country:</div>
                    <div>{formData?.location?.country}</div>
                    <div className="font-medium">Address:</div>
                    <div>{formData?.location?.address}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-[#1e3a8a]">Participants</h3>
                <div className="grid gap-2">
                  {formData?.participants?.map((p, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 p-2 bg-muted rounded-md">
                      <div>{p.name}</div>
                      <div>{p.country}</div>
                      <div>{p.birth_date ? format(p.birth_date, "PPP") : "N/A"}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-[#1e3a8a]">Evidence & Sources</h3>
                <div className="grid gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Sources:</h4>
                    {formData?.sources && formData.sources.length > 0 ? (
                      formData.sources.map((s, i) => (
                        <div key={i} className="text-sm">
                          {s.source_url} - {s.description}
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-muted-foreground">No sources added</div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Files:</h4>
                    {formData?.assets && formData.assets.length > 0 ? (
                      formData.assets.map((a, i) => (
                        <div key={i} className="text-sm">
                          {a.file_type}: {a.description}
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-muted-foreground">No files uploaded</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Back to Edit
            </Button>
            <WRButton variant="secondary" onClick={handleConfirm}>
              Confirm & Submit
            </WRButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
