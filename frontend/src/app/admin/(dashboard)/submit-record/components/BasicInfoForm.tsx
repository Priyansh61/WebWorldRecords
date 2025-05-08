import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { styles } from "@/components/dashboard/styles"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectLabel, SelectGroup } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { UseFormReturn } from "react-hook-form"

// Record definition type
interface RecordDefinition {
  id: string
  name: string
  category: string
  unit: string
  description: string
}

interface BasicInfoFormProps {
  form: UseFormReturn<any>
  recordDefinitions: RecordDefinition[]
}

export function BasicInfoForm({ form, recordDefinitions }: BasicInfoFormProps) {
  return (
    <Card className="p-6">
      <div className="grid gap-6">
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
              <FormItem className="flex-1">
                <FormLabel className={styles.formLabel}>Record Definition</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white w-full h-auto min-h-[80px] p-4">
                      <SelectValue placeholder="Select a record to attempt">
                        {field.value && (() => {
                          const selectedRecord = recordDefinitions.find(def => def.id === field.value);
                          if (selectedRecord) {
                            return (
                              <div className="flex flex-col gap-2">
                                <div className="text-lg font-medium">{selectedRecord.name}</div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">{selectedRecord.description}</span>
                                  {selectedRecord.unit && (
                                    <Badge variant="outline" className="ml-4">
                                      Unit: {selectedRecord.unit}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        })()}
                      </SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[300px] bg-white">
                    {Object.entries(
                      recordDefinitions.reduce((acc, def) => {
                        if (!acc[def.category]) {
                          acc[def.category] = [];
                        }
                        acc[def.category].push(def);
                        return acc;
                      }, {} as Record<string, RecordDefinition[]>)
                    ).map(([category, defs]) => (
                      <SelectGroup key={category}>
                        <SelectLabel className="px-2 py-1.5 text-sm font-semibold text-muted-foreground bg-muted">
                          {category}
                        </SelectLabel>
                        {defs.map((def) => (
                          <SelectItem
                            key={def.id}
                            value={def.id}
                            className="py-3 cursor-pointer bg-white hover:bg-gray-50"
                          >
                            <div className="flex flex-col gap-1">
                              <div className="font-medium">{def.name}</div>
                              <div className="text-xs text-muted-foreground flex items-center gap-2">
                                <span>{def.description}</span>
                                {def.unit && (
                                  <Badge variant="outline" className="ml-auto">
                                    Unit: {def.unit}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the record you want to attempt. Each record has specific measurement units and criteria.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="record_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={styles.formLabel}>Date of Attempt</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-white",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value || undefined}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      className="bg-white rounded-md border"
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
                  <Input label="" placeholder="e.g. 9.58 seconds" {...field} />
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
      </div>
    </Card>
  )
} 