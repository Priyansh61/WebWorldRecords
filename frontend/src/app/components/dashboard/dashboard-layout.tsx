"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Award, BarChart3, FileText, Home, Key, Lightbulb, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { DashboardNav } from "./dashboard-nav"
import { UserNav } from "./user-nav"
import { WR_THEME } from "./theme-constants"

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Submit Record",
    href: "/admin/submit-record",
    icon: FileText,
  },
  {
    title: "My Records",
    href: "/admin/my-records",
    icon: BarChart3,
  },
  {
    title: "VKeys",
    href: "/admin/vkeys",
    icon: Key,
  },
]

export function DashboardLayout({
                                  children,
                                  logoUrl = "/images/world-records-logo.png",
                                }: {
  children: React.ReactNode
  logoUrl?: string
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2 md:gap-4">
              <Button  size="icon" className="md:hidden" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <div className="flex items-center gap-2">
                <Link href="/admin/dashboard" className="flex items-center gap-2">
                  <Image
                      src={logoUrl || "/placeholder.svg?height=40&width=40"}
                      alt="World Records Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                      unoptimized
                  />
                  <span
                      className="hidden font-bold md:inline-block"
                      style={{ color: WR_THEME.colors.navy, fontFamily: WR_THEME.fontFamily.heading }}
                  >
                  World Records
                </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UserNav />
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <aside className="hidden w-64 bg-white md:block border-l-gray-400">
            <div className="flex h-full flex-col gap-2 p-4">
              <div className="py-2">
                <h2
                    className="px-4 text-lg font-semibold tracking-tight"
                    style={{ color: WR_THEME.colors.navy, fontFamily: WR_THEME.fontFamily.heading }}
                >
                  Partner Admin
                </h2>
              </div>
              <div className="flex-1">
                <DashboardNav items={navItems} pathname={pathname} />
              </div>
              <div className="rounded-lg p-4" style={{ backgroundColor: `${WR_THEME.colors.navy}10` }}>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" style={{ color: WR_THEME.colors.navy }} />
                  <h3
                      className="font-medium"
                      style={{ color: WR_THEME.colors.navy, fontFamily: WR_THEME.fontFamily.heading }}
                  >
                    Partner Status
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                  Verified Partner since Jan 2023
                </p>
              </div>
            </div>
          </aside>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="w-64 bg-white p-0">
              <div className="flex h-full flex-col gap-2 p-4">
                <div className="flex items-center justify-between py-2">
                  <h2 className="px-4 text-lg font-semibold tracking-tight text-wr-navy">Partner Admin</h2>
                  <Button variant="ghost" className="" size="icon" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex-1">
                  <DashboardNav items={navItems} pathname={pathname} />
                </div>
                <div className="rounded-lg p-4" style={{ backgroundColor: `${WR_THEME.colors.navy}10` }}>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-wr-navy" />
                    <h3 className="font-medium text-wr-navy">Partner Status</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Verified Partner since Jan 2023</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <main className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
            {children}
          </main>
        </div>
      </div>
  )
}
