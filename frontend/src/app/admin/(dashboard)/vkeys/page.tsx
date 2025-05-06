"use client"


import { CardContent } from "@/components/ui/card"

import { PageHeader } from "@/components/dashboard/page-header"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader } from "@/components/dashboard/cards"
import { StatusBadge } from "@/components/dashboard/status-badge"
import {CustomTable} from "@/components/tables/custom-table";
import {WR_THEME} from "@/components/dashboard/theme-constants";

// Mock data - replace with actual data fetching in production
const vkeys = [
  {
    id: "VK-1234-5678",
    status: "used",
    expiryDate: "2023-12-31",
    usedAt: "2023-10-15",
  },
  {
    id: "VK-2345-6789",
    status: "unused",
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-3456-7890",
    status: "used",
    expiryDate: "2023-12-31",
    usedAt: "2023-10-10",
  },
  {
    id: "VK-4567-8901",
    status: "unused",
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-5678-9012",
    status: "used",
    expiryDate: "2023-12-31",
    usedAt: "2023-10-05",
  },
  {
    id: "VK-6789-0123",
    status: "unused",
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-7890-1234",
    status: "unused",
    expiryDate: "2023-12-31",
    usedAt: null,
  },
  {
    id: "VK-8901-2345",
    status: "unused",
    expiryDate: "2023-12-31",
    usedAt: null,
  },
]

// Table columns definition
const vkeyColumns = [
  { key: "id", header: "Key", width: "25%" },
  {
    key: "status",
    header: "Status",
    width: "25%",
    render: (value: string) => <StatusBadge status={value as "used" | "unused"} />,
  },
  {
    key: "expiryDate",
    header: "Expiry Date",
    width: "25%",
    render: (value: string) => (
        <span style={{ color: "rgba(0,0,0,0.6)", fontFamily: WR_THEME.fontFamily.sans }}>{value}</span>
    ),
  },
  {
    key: "usedAt",
    header: "Used At",
    width: "25%",
    render: (value: string | null) => (
        <span style={{ color: "rgba(0,0,0,0.6)", fontFamily: WR_THEME.fontFamily.sans }}>{value || "Not used yet"}</span>
    ),
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
          <CardContent>
            <CustomTable columns={vkeyColumns} data={vkeys} />
          </CardContent>
        </WRCard>
      </div>
  )
}
