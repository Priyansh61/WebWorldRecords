import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

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
            pathname === item.href
              ? "bg-wr-navy/10 text-wr-navy hover:bg-wr-navy/20 hover:text-wr-navy"
              : "text-muted-foreground hover:bg-transparent hover:text-wr-navy",
            "justify-start",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
