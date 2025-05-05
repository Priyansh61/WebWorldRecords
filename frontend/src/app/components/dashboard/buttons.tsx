import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { wrButtonVariants } from "./styles"

interface WRButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

export function WRButton({ variant = "primary", size = "default", className, children, ...props }: WRButtonProps) {
  return (
    <Button className={cn(wrButtonVariants({ variant, size }), className)} {...props}>
      {children}
    </Button>
  )
}
