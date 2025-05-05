"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, FolderOpen, Key, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar-provider"
import { ScrollArea } from "@/components/ui/scroll-area"

const routes = [
    {
        label: "Dashboard",
        icon: BarChart3,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Submit Record",
        icon: FileText,
        href: "/submit-record",
        color: "text-violet-500",
    },
    {
        label: "My Records",
        icon: FolderOpen,
        href: "/my-records",
        color: "text-pink-700",
    },
    {
        label: "VKeys",
        icon: Key,
        href: "/vkeys",
        color: "text-orange-500",
    },
]

export function Sidebar() {
    const pathname = usePathname()
    const { isOpen, toggle } = useSidebar()

    return (
        <div className="relative">
            <div
                className={cn(
                    "fixed inset-y-0 z-50 flex h-full flex-col bg-[#1e3a8a] transition-all duration-300",
                    isOpen ? "w-64" : "w-[70px]",
                )}
            >
                <div className="flex items-center justify-between px-4 py-4">
                    <div className={cn("flex items-center gap-x-2 transition-all duration-300", !isOpen && "opacity-0")}>
                        <div className="relative h-8 w-8 rounded-full bg-white p-1">
                            <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-full w-full object-cover" />
                        </div>
                        <span className="text-xl font-bold text-white">WR Admin</span>
                    </div>
                    <Button onClick={toggle} className="h-8 w-8 p-0 text-white">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>
                <ScrollArea className="flex-1 overflow-auto">
                    <div className="px-3 py-2">
                        <div className="mt-2 space-y-1">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-white/10",
                                        pathname === route.href ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
                                        !isOpen && "justify-center px-0",
                                    )}
                                >
                                    <route.icon className={cn("h-5 w-5", route.color)} />
                                    {isOpen && <span className="ml-3">{route.label}</span>}
                                </Link>
                            ))}
                        </div>
                    </div>
                </ScrollArea>
                <div className="mt-auto border-t border-white/10 px-3 py-3">
                    <div className={cn("flex items-center gap-x-2", !isOpen && "justify-center")}>
                        <div className="h-8 w-8 rounded-full bg-white">
                            <img
                                src="/placeholder.svg?height=32&width=32"
                                alt="User"
                                className="h-full w-full rounded-full object-cover"
                            />
                        </div>
                        {isOpen && (
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Partner Admin</span>
                                <span className="text-xs text-white/70">admin@example.com</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
