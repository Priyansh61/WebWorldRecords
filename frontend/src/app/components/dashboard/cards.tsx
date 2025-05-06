import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { styles } from "./styles"
import type { LucideIcon } from "lucide-react"
import { WR_THEME } from "./theme-constants"

interface WRCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "accent"
}

export function WRCard({ children, className, variant = "default" }: WRCardProps) {
  return (
      <Card
          className={cn("shadow-md transition-all duration-200 hover:shadow-lg", className)}
          style={{
            borderTop: `4px solid ${variant === "default" ? WR_THEME.colors.navy : WR_THEME.colors.red}`,
            fontFamily: WR_THEME.fontFamily.sans,
          }}
      >
        {children}
      </Card>
  )
}

interface WRCardHeaderProps {
  title: string
  description?: string
  className?: string
  action?: React.ReactNode
}

export function WRCardHeader({ title, description, className, action }: WRCardHeaderProps) {
  return (
      <CardHeader className={cn("border-b-1 border-b-gray-200 bg-muted/30", className)}>
        <div className="flex items-center justify-between">
          <CardTitle
              style={{
                color: WR_THEME.colors.navy,
                fontFamily: WR_THEME.fontFamily.heading,
              }}
          >
            {title}
          </CardTitle>
          {action}
        </div>
        {description && (
            <CardDescription
                style={{
                  fontFamily: WR_THEME.fontFamily.sans,
                }}
            >
              {description}
            </CardDescription>
        )}
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
  const iconBgColor = variant === "default" ? `${WR_THEME.colors.navy}10` : `${WR_THEME.colors.red}10`
  const iconColor = variant === "default" ? WR_THEME.colors.navy : WR_THEME.colors.red
  const valueColor = variant === "default" ? WR_THEME.colors.navy : WR_THEME.colors.red

  return (
      <WRCard className={className} variant={variant}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle
              className="text-sm font-medium"
              style={{
                fontFamily: WR_THEME.fontFamily.heading,
              }}
          >
            {title}
          </CardTitle>
          <div className="rounded-full p-2" style={{ backgroundColor: iconBgColor }}>
            <Icon className="h-4 w-4" style={{ color: iconColor }} />
          </div>
        </CardHeader>
        <CardContent>
          <div
              className="text-2xl font-bold"
              style={{
                color: valueColor,
                fontFamily: WR_THEME.fontFamily.heading,
              }}
          >
            {value}
          </div>
        </CardContent>
      </WRCard>
  )
}
