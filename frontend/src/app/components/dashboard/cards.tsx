import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { styles } from "./styles"
import type { LucideIcon } from "lucide-react"

interface WRCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "accent"
}

export function WRCard({ children, className, variant = "default" }: WRCardProps) {
  return <Card className={cn(variant === "default" ? styles.card : styles.cardAccent, className)}>{children}</Card>
}

interface WRCardHeaderProps {
  title: string
  description?: string
  className?: string
  action?: React.ReactNode
}

export function WRCardHeader({ title, description, className, action }: WRCardHeaderProps) {
  return (
    <CardHeader className={cn(styles.cardHeader, className)}>
      <div className="flex items-center justify-between">
        <CardTitle className={styles.cardTitle}>{title}</CardTitle>
        {action}
      </div>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
  )
}

interface WRStatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  className?: string
  variant?: "default" | "accent"
}

export function WRStatsCard({ title, value, icon: Icon, className, variant = "default" }: WRStatsCardProps) {
  return (
    <WRCard className={className} variant={variant}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={variant === "default" ? styles.iconContainer.default : styles.iconContainer.accent}>
          <Icon className={variant === "default" ? styles.iconColor.default : styles.iconColor.accent + " h-4 w-4"} />
        </div>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "text-2xl font-bold",
            variant === "default" ? styles.textColor.default : styles.textColor.accent,
          )}
        >
          {value}
        </div>
      </CardContent>
    </WRCard>
  )
}
