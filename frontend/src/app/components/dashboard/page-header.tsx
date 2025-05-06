import type React from "react"
import { cn } from "@/lib/utils"
import { styles } from "./styles"
import { WR_THEME } from "./theme-constants"

interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function PageHeader({ title, description, action, className }: PageHeaderProps) {
  return (
      <div className={cn("rounded-lg bg-white p-6 shadow-sm", className)}>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1
                className="text-3xl font-bold tracking-tight"
                style={{
                  color: WR_THEME.colors.navy,
                  fontFamily: WR_THEME.fontFamily.heading,
                }}
            >
              {title}
            </h1>
            {description && (
                <p
                    className="text-muted-foreground"
                    style={{
                      fontFamily: WR_THEME.fontFamily.sans,
                    }}
                >
                  {description}
                </p>
            )}
          </div>
          {action && <div className="flex items-center gap-2">{action}</div>}
        </div>
      </div>
  )
}
