"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CalendarIcon, Upload } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

import { PageHeader } from "@/components/dashboard/page-header"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader } from "@/components/dashboard/cards"
import { styles } from "@/components/dashboard/styles"

// Mock data - replace with actual data in production
const recordDefinitions = [
  { id: "1", name: "Fastest 100m Sprint" },
  { id: "2", name: "Highest Jump" },
  { id: "3", name: "Longest Distance Run in 24 Hours" },
  { id: "4", name: "Most Push-ups in One Hour" },
  { id: "5", name: "Longest Time Holding Breath Underwater" },
]

const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  definition: z.string({ required_error: "Please select a record definition" }),
  date: z.date({ required_error: "Please select a date" }),
  value: z.string().min(1, { message: "Record value is required" }),
  details: z.string().min(10, { message: "Details must be at least 10 characters" }),
  vkey: z.string().min(8, { message: "VKey must be at least 8 characters" }),
  evidence: z.any().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function SubmitRecordPage() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<FormValues | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      details: "",
      vkey: "",
    },
  })

  function onSubmit(data: FormValues) {
    setFormData(data)
    setShowConfirmation(true)
  }

  function handleConfirm() {
    // In a real app, you would submit the data to your API here
    console.log("Submitting record:", formData)
    setShowConfirmation(false)
    form.reset()
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

      <WRCard>
        <WRCardHeader
          title="Record Details"
          description="Fill in all the required information about the record attempt"
        />
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.formLabel}>Record Title</FormLabel>
                      <FormControl>
                        <Input label="" placeholder="Enter record title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="definition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.formLabel}>Record Definition</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select record definition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {recordDefinitions.map((def) => (
                            <SelectItem key={def.id} value={def.id}>
                              {def.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className={styles.formLabel}>Date of Attempt</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="value"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.formLabel}>Record Value</FormLabel>
                      <FormControl>
                        <Input label='' placeholder="e.g. 9.58 seconds" {...field} />
                      </FormControl>
                      <FormDescription>Enter the numeric value with units if applicable</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide detailed information about the record attempt"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vkey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>VKey</FormLabel>
                    <FormControl>
                      <Input label='' placeholder="Enter your verification key" {...field} />
                    </FormControl>
                    <FormDescription>Enter the verification key assigned to you</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="evidence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={styles.formLabel}>Upload Evidence</FormLabel>
                    <FormControl>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className={styles.uploadArea}>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-[#1e3a8a]" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold text-[#1e3a8a]">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">Images, videos or documents (MAX. 100MB)</p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                field.onChange(file)
                              }
                            }}
                          />
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <WRButton type="submit" variant="secondary" className="w-full md:w-auto">
                  Submit Record
                </WRButton>
              </div>
            </form>
          </Form>
        </CardContent>
      </WRCard>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[#1e3a8a]">Confirm Submission</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit this record? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="font-medium text-[#1e3a8a]">Record Title:</div>
              <div>{formData?.title}</div>
              <div className="font-medium text-[#1e3a8a]">Record Definition:</div>
              <div>{recordDefinitions.find((d) => d.id === formData?.definition)?.name}</div>
              <div className="font-medium text-[#1e3a8a]">Date of Attempt:</div>
              <div>{formData?.date ? format(formData.date, "PPP") : ""}</div>
              <div className="font-medium text-[#1e3a8a]">Record Value:</div>
              <div>{formData?.value}</div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Cancel
            </Button>
            <WRButton variant="secondary" onClick={handleConfirm}>
              Confirm
            </WRButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
