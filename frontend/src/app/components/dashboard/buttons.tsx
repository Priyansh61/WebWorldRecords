import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { wrButtonVariants } from "./styles"
import { WR_THEME } from "./theme-constants"

interface WRButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

export function WRButton({ variant = "primary", size = "default", className, children, ...props }: WRButtonProps) {
  // Define styles based on variant
  const getStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: WR_THEME.colors.navy,
          color: "white",
          hoverBg: `${WR_THEME.colors.navy}e6`, // 90% opacity
        }
      case "secondary":
        return {
          backgroundColor: WR_THEME.colors.red,
          color: "white",
          hoverBg: `${WR_THEME.colors.red}e6`, // 90% opacity
        }
      case "outline":
        return {
          backgroundColor: "transparent",
          color: WR_THEME.colors.navy,
          border: `1px solid ${WR_THEME.colors.navy}`,
          hoverBg: `${WR_THEME.colors.navy}10`, // 10% opacity
        }
      default:
        return {
          backgroundColor: WR_THEME.colors.navy,
          color: "white",
          hoverBg: `${WR_THEME.colors.navy}e6`, // 90% opacity
        }
    }
  }

  const styles = getStyles()

  return (
      <Button
          className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              size === "default" && "h-10 px-4 py-2",
              size === "sm" && "h-9 rounded-md px-3",
              size === "lg" && "h-11 rounded-md px-8",
              size === "icon" && "h-10 w-10",
              className,
          )}
          style={{
            backgroundColor: styles.backgroundColor,
            color: styles.color,
            border: styles.border,
            fontFamily: WR_THEME.fontFamily.sans,
          }}
          {...props}
      >
        {children}
      </Button>
  )
}
