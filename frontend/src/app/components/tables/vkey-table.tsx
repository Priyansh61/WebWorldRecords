"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

type VKey = {
    id: string
    status: "used" | "unused" | "expired"
    createdAt: string
    expiresAt: string
    usedAt: string | null
    recordTitle: string | null
}

const vkeys: VKey[] = [
    {
        id: "VK-1234-5678",
        status: "used",
        createdAt: "2023-04-15T09:30:00",
        expiresAt: "2023-06-01T00:00:00",
        usedAt: "2023-05-01T09:30:00",
        recordTitle: "Maximum pull-ups in one minute",
    },
    {
        id: "VK-2345-6789",
        status: "used",
        createdAt: "2023-04-20T14:45:00",
        expiresAt: "2023-06-03T00:00:00",
        usedAt: "2023-05-03T14:45:00",
        recordTitle: "Fastest marathon dressed as a superhero",
    },
    {
        id: "VK-3456-7890",
        status: "unused",
        createdAt: "2023-04-25T11:20:00",
        expiresAt: "2023-06-10T00:00:00",
        usedAt: null,
        recordTitle: null,
    },
    {
        id: "VK-4567-8901",
        status: "unused",
        createdAt: "2023-04-30T16:30:00",
        expiresAt: "2023-06-15T00:00:00",
        usedAt: null,
        recordTitle: null,
    },
    {
        id: "VK-5678-9012",
        status: "used",
        createdAt: "2023-05-05T10:15:00",
        expiresAt: "2023-06-10T00:00:00",
        usedAt: "2023-05-10T11:20:00",
        recordTitle: "Most basketball free throws in one minute",
    },
    {
        id: "VK-6789-0123",
        status: "expired",
        createdAt: "2023-03-01T08:45:00",
        expiresAt: "2023-04-01T00:00:00",
        usedAt: null,
        recordTitle: null,
    },
    {
        id: "VK-7890-1234",
        status: "unused",
        createdAt: "2023-05-10T13:40:00",
        expiresAt: "2023-06-20T00:00:00",
        usedAt: null,
        recordTitle: null,
    },
]

export function VKeysTable() {
    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text)
        toast("Copied to clipboard", {
            description: `VKey ID ${text} copied to clipboard.`,
            duration: 2000,
            icon: <Copy className="h-4 w-4" />,
        })
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>VKey ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Expires At</TableHead>
                        <TableHead>Used At</TableHead>
                        <TableHead>Record Title</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {vkeys.map((vkey) => (
                        <TableRow key={vkey.id}>
                            <TableCell className="font-medium">{vkey.id}</TableCell>
                            <TableCell>
                                <Badge
                                    variant="outline"
                                    className={
                                        vkey.status === "used"
                                            ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                                            : vkey.status === "unused"
                                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                                                : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                                    }
                                >
                                    {vkey.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{new Date(vkey.createdAt).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(vkey.expiresAt).toLocaleDateString()}</TableCell>
                            <TableCell>{vkey.usedAt ? new Date(vkey.usedAt).toLocaleDateString() : "—"}</TableCell>
                            <TableCell>{vkey.recordTitle || "—"}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => copyToClipboard(vkey.id)}>
                                            <Copy className="mr-2 h-4 w-4" />
                                            Copy VKey
                                        </DropdownMenuItem>
                                        {vkey.status === "unused" && <DropdownMenuItem>Extend Expiry Date</DropdownMenuItem>}
                                        {vkey.status === "used" && <DropdownMenuItem>View Record</DropdownMenuItem>}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
