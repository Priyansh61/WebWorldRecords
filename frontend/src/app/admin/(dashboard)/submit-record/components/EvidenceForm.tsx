import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"
import { UseFormReturn } from "react-hook-form"

interface Source {
  source_url: string
  description?: string
}

interface Asset {
  file: File | null
  file_type: 'image' | 'video' | 'pdf' | 'certificate' | 'other'
  description?: string
}

interface EvidenceFormProps {
  form: UseFormReturn<any>
}

export function EvidenceForm({ form }: EvidenceFormProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Sources Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sources</h3>
            <Button
              type="button"
              onClick={() => {
                const sources = form.getValues("sources") || [];
                form.setValue("sources", [...sources, { source_url: "", description: "" }]);
              }}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Source
            </Button>
          </div>

          <ScrollArea className="h-[200px] pr-4">
            <div className="space-y-4">
              {form.watch("sources")?.map((source: Source, index: number) => (
                <Card key={index} className="p-4 relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => {
                      const currentSources = form.getValues("sources") ?? [];
                      form.setValue(
                        "sources",
                        currentSources.filter((_: Source, i: number) => i !== index)
                      );
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name={`sources.${index}.source_url`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Source URL</FormLabel>
                          <FormControl>
                            <Input label="" type="url" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`sources.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input label="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Assets Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Evidence Files</h3>
            <Button
              type="button"
              onClick={() => {
                const assets = form.getValues("assets") || [];
                form.setValue("assets", [...assets, { file: null, file_type: "image", description: "" }]);
              }}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Evidence
            </Button>
          </div>

          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {form.watch("assets")?.map((asset: Asset, index: number) => (
                <Card key={index} className="p-4 relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => {
                      const currentAssets = form.getValues("assets") ?? [];
                      form.setValue(
                        "assets",
                        currentAssets.filter((_: Asset, i: number) => i !== index)
                      );
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>

                  <div className="grid gap-4 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name={`assets.${index}.file`}
                      render={({ field: assetField }) => (
                        <FormItem>
                          <FormLabel>File</FormLabel>
                          <FormControl>
                            <Input
                              label=""
                              type="file"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  assetField.onChange(file);
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`assets.${index}.file_type`}
                      render={({ field: typeField }) => (
                        <FormItem>
                          <FormLabel>File Type</FormLabel>
                          <Select onValueChange={typeField.onChange} value={typeField.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select file type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="image">Image</SelectItem>
                              <SelectItem value="video">Video</SelectItem>
                              <SelectItem value="pdf">PDF</SelectItem>
                              <SelectItem value="certificate">Certificate</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`assets.${index}.description`}
                      render={({ field: descField }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input label="" {...descField} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Card>
  )
} 