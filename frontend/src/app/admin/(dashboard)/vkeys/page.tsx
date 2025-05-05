"use client"

import { format } from "date-fns"

import { CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { PageHeader } from "@/components/dashboard/page-header"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader } from "@/components/dashboard/cards"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { styles } from "@/components/dashboard/styles"

// Mock data - replace with actual data fetching in production
const vkeys = [
  {
    id: "VK-1234-5678",
    used: true,
    expiryDate: "2023-12-31",
    usedAt: "2023-10-15",
  },
  {
    id: "VK-2345-6789",
    used: false,
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-3456-7890",
    used: true,
    expiryDate: "2023-12-31",
    usedAt: "2023-10-10",
  },
  {
    id: "VK-4567-8901",
    used: false,
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-5678-9012",
    used: true,
    expiryDate: "2023-12-31",
    usedAt: "2023-10-05",
  },
  {
    id: "VK-6789-0123",
    used: false,
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-7890-1234",
    used: false,
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-8901-2345",
    used: false,
    expiryDate: "2023-12-31",
    usedAt: null,
  },
]

export default function VKeysPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="VKeys"
        description="Manage your verification keys for record submissions"
        action={<WRButton variant="outline">Request New Keys</WRButton>}
      />

      <WRCard>
        <WRCardHeader title="Assigned VKeys" description="All verification keys assigned to your partner account" />
        <CardContent className="p-0">
          <Table>
            <TableHeader className={styles.tableHeader}>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Used At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vkeys.map((vkey) => (
                <TableRow key={vkey.id}>
                  <TableCell className={styles.tableCell}>{vkey.id}</TableCell>
                  <TableCell>
                    <StatusBadge status={vkey.used ? "used" : "unused"} />
                  </TableCell>
                  <TableCell>{format(new Date(vkey.expiryDate), "PPP")}</TableCell>
                  <TableCell>{vkey.usedAt ? format(new Date(vkey.usedAt), "PPP") : "Not used yet"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </WRCard>
    </div>
  )
}
