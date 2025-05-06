"use client"

import { User } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { WR_THEME } from "./theme-constants"

export function UserNav() {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8 border border-[#1e3a8a]/20">
              <AvatarFallback className="bg-[#1e3a8a]/10 text-[#1e3a8a]" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
            className="w-56 bg-white shadow-md"
            align="end"
            forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                Partner Admin
              </p>
              <p className="text-xs leading-none text-muted-foreground" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                admin@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem style={{ fontFamily: WR_THEME.fontFamily.sans }}>Profile</DropdownMenuItem>
          <DropdownMenuItem style={{ fontFamily: WR_THEME.fontFamily.sans }}>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem style={{ fontFamily: WR_THEME.fontFamily.sans }}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
