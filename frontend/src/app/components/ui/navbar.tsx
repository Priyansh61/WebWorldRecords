"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSidebar } from "@/components/ui/sidebar-provider"
import { cn } from "@/lib/utils"

export function Navbar() {
    const { isOpen } = useSidebar()

    return (
        <div
            className={cn(
                "fixed top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-white px-4 transition-all duration-300",
                isOpen ? "left-64 w-[calc(100%-16rem)]" : "left-[70px] w-[calc(100%-70px)]",
            )}
        >
            <div className="flex items-center gap-x-4">
                <div className="relative w-64 md:w-80">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-8" label={""} />
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <Button  size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
