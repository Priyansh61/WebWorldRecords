import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { WR_THEME } from "./theme-constants"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

interface DashboardNavProps {
  items: NavItem[]
  pathname: string
}

export function DashboardNav({ items, pathname }: DashboardNavProps) {
  return (
      <nav className="grid gap-1">
        {items.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === item.href ? "hover:text-white" : "text-muted-foreground hover:bg-transparent",
                    "justify-start",
                )}
                style={{
                  backgroundColor: pathname === item.href ? `${WR_THEME.colors.navy}10` : undefined,
                  color: pathname === item.href ? WR_THEME.colors.navy : undefined,
                  fontFamily: WR_THEME.fontFamily.sans,
                }}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
        ))}
      </nav>
  )
}
