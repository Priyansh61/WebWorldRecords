import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentVKeys = [
    {
        id: "VK-1234-5678",
        status: "used",
        usedAt: "2023-05-01T09:30:00",
        expiresAt: "2023-06-01T00:00:00",
        recordTitle: "Maximum pull-ups in one minute",
    },
    {
        id: "VK-2345-6789",
        status: "used",
        usedAt: "2023-05-03T14:45:00",
        expiresAt: "2023-06-03T00:00:00",
        recordTitle: "Fastest marathon dressed as a superhero",
    },
    {
        id: "VK-3456-7890",
        status: "unused",
        usedAt: null,
        expiresAt: "2023-06-10T00:00:00",
        recordTitle: null,
    },
    {
        id: "VK-4567-8901",
        status: "unused",
        usedAt: null,
        expiresAt: "2023-06-15T00:00:00",
        recordTitle: null,
    },
    {
        id: "VK-5678-9012",
        status: "used",
        usedAt: "2023-05-10T11:20:00",
        expiresAt: "2023-06-10T00:00:00",
        recordTitle: "Most basketball free throws in one minute",
    },
]

export function RecentVKeysTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>VKey ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Used At</TableHead>
                    <TableHead>Expires At</TableHead>
                    <TableHead>Record Title</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentVKeys.map((vkey) => (
                    <TableRow key={vkey.id}>
                        <TableCell className="font-medium">{vkey.id}</TableCell>
                        <TableCell>
                            <Badge
                                variant={vkey.status === "used" ? "default" : "outline"}
                                className={vkey.status === "used" ? "bg-green-600" : ""}
                            >
                                {vkey.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{vkey.usedAt ? new Date(vkey.usedAt).toLocaleDateString() : "—"}</TableCell>
                        <TableCell>{new Date(vkey.expiresAt).toLocaleDateString()}</TableCell>
                        <TableCell>{vkey.recordTitle || "—"}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
