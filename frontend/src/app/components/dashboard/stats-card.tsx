import type { LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  className?: string
  variant?: "default" | "accent"
}

export function StatsCard({ title, value, icon: Icon, className, variant = "default" }: StatsCardProps) {
  return (
    <Card className={cn(variant === "default" ? "wr-card" : "wr-card-accent", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn("rounded-full p-2", variant === "default" ? "bg-wr-navy/10" : "bg-wr-red/10")}>
          <Icon className={cn("h-4 w-4", variant === "default" ? "text-wr-navy" : "text-wr-red")} />
        </div>
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", variant === "default" ? "text-wr-navy" : "text-wr-red")}>{value}</div>
      </CardContent>
    </Card>
  )
}
