import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type StatusType = "pending" | "approved" | "rejected" | "used" | "unused"

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge
      className={cn(
        "capitalize",
        status === "approved" && "bg-green-600 hover:bg-green-700",
        status === "pending" && "bg-amber-500 hover:bg-amber-600",
        status === "rejected" && "bg-[#dc2626] hover:bg-[#dc2626]/90",
        status === "used" && "bg-[#1e40af] hover:bg-[#1e40af]/90",
        status === "unused" && "bg-slate-500 hover:bg-slate-600",
        className,
      )}
    >
      {status}
    </Badge>
  )
}
