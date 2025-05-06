import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { WR_THEME } from "./theme-constants"

type StatusType = "pending" | "approved" | "rejected" | "used" | "unused"

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  // Get the appropriate background color based on status
  const getBgColor = () => {
    switch (status) {
      case "approved":
        return "bg-green-600 hover:bg-green-700 text-white font-bold"
      case "pending":
        return "bg-amber-500 hover:bg-amber-600 text-white font-bold"
      case "rejected":
        return "bg-red-600 hover:bg-red-700 text-white font-bold"
      case "used":
        return "bg-blue-700 hover:bg-blue-800 text-white font-bold"
      case "unused":
        return "bg-slate-500 hover:bg-slate-600 text-white font-bold"
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white font-bold"
    }
  }

  return (
      <Badge className={cn("capitalize", getBgColor(), className)} style={{ fontFamily: WR_THEME.fontFamily.sans }}>
        {status}
      </Badge>
  )
}
