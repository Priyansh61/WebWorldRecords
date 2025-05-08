"use client"

import React, { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Upload } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { recordsApi } from "@/services/api"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    recordDefinition: z.string({
        required_error: "Please select a record definition.",
    }),
    attemptDate: z.date({
        required_error: "Please select a date.",
    }),
    recordValue: z.string().min(1, {
        message: "Record value is required.",
    }),
    details: z.string().min(10, {
        message: "Details must be at least 10 characters.",
    }),
    vkey: z.string().min(1, {
        message: "VKey is required.",
    }),
    evidence: z.any().optional(),
})

interface RecordDefinition {
    id: string;
    name: string;
}

export function SubmitRecordForm() {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [recordDefinitions, setRecordDefinitions] = useState<RecordDefinition[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            details: "",
            vkey: "",
        },
    })

    // Load record definitions when component mounts
    useEffect(() => {
        const loadRecordDefinitions = async () => {
            try {
                const definitions = await recordsApi.getRecordDefinitions();
                setRecordDefinitions(definitions as RecordDefinition[]);
            } catch (error) {
                toast.error("Failed to load record definitions");
                console.error("Error loading record definitions:", error);
            }
        };
        loadRecordDefinitions();
    }, []);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            await recordsApi.submitRecord({
                ...values,
                evidence: selectedFile || undefined,
            });
            toast.success("Record submitted successfully!", {
                description: "Your record attempt has been submitted for review.",
            });
            form.reset();
            setSelectedFile(null);
        } catch (error: any) {
            toast.error("Failed to submit record", {
                description: error.response?.data?.message || "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
            setIsConfirmOpen(false);
        }
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Record Information</CardTitle>
                    <CardDescription>Enter the details of the world record attempt</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(() => setIsConfirmOpen(true))} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Record Title</FormLabel>
                                            <FormControl>
                                                <Input label={""} placeholder="Enter record title" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="recordDefinition"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Record Definition</FormLabel>
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

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="attemptDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date of Attempt</FormLabel>
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
                                    name="recordValue"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Record Value</FormLabel>
                                            <FormControl>
                                                <Input label={""} placeholder="e.g. 42 repetitions, 2:30:15" {...field} />
                                            </FormControl>
                                            <FormDescription>Enter the numeric value or time achieved</FormDescription>
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
                                        <FormLabel>Record Details</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Provide details about the record attempt"
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Include any relevant information about the conditions, witnesses, etc.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="vkey"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>VKey</FormLabel>
                                        <FormControl>
                                            <Input label={""} placeholder="Enter your VKey" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the verification key provided to you</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="evidence"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Evidence Upload</FormLabel>
                                        <FormControl>
                                            <div className="border-2 border-dashed rounded-lg p-6 text-center">
                                                <Input
                                                    type="file"
                                                    id="file-upload"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        handleFileChange(e)
                                                        field.onChange(e.target.files ? e.target.files[0] : null)
                                                    }} label={""}                                                />
                                                <label
                                                    htmlFor="file-upload"
                                                    className="cursor-pointer flex flex-col items-center justify-center gap-2"
                                                >
                                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                                    <span className="text-sm font-medium">
                            {selectedFile ? selectedFile.name : "Click to upload evidence"}
                          </span>
                                                    <span className="text-xs text-muted-foreground">
                            Supports images, videos, and documents up to 100MB
                          </span>
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            Upload photos, videos, or documents as evidence of your record attempt
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end space-x-4">
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit Record"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Record Submission</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to submit this record? Please verify all information is correct.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            disabled={isSubmitting}
                            onClick={() => form.handleSubmit(onSubmit)()}
                        >
                            {isSubmitting ? "Submitting..." : "Confirm"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
