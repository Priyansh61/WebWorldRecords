"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

import { CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import { PageHeader } from "@/components/dashboard/page-header"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader } from "@/components/dashboard/cards"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { WR_THEME } from "@/components/dashboard/theme-constants"
import {CustomTable} from "@/components/tables/custom-table";

// Mock data - replace with actual data fetching in production
const records = [
  {
    id: "1",
    title: "Fastest 100m Sprint",
    status: "approved",
    submittedDate: "2023-10-01",
    value: "9.85 seconds",
    details: "Achieved at the National Stadium during the annual athletics meet.",
    definition: "Fastest 100m Sprint",
  },
  {
    id: "2",
    title: "Highest Jump",
    status: "pending",
    submittedDate: "2023-10-05",
    value: "2.45 meters",
    details: "Performed at the Regional Championships with official measurement.",
    definition: "Highest Jump",
  },
  {
    id: "3",
    title: "Longest Distance Run in 24 Hours",
    status: "rejected",
    submittedDate: "2023-09-15",
    value: "285 kilometers",
    details: "Completed on a certified track with official timekeepers present.",
    definition: "Longest Distance Run in 24 Hours",
  },
  {
    id: "4",
    title: "Most Push-ups in One Hour",
    status: "approved",
    submittedDate: "2023-09-20",
    value: "2,806",
    details: "Performed with proper form and verified by three independent judges.",
    definition: "Most Push-ups in One Hour",
  },
  {
    id: "5",
    title: "Longest Time Holding Breath Underwater",
    status: "pending",
    submittedDate: "2023-10-10",
    value: "11 minutes 35 seconds",
    details: "Achieved in a controlled environment with medical supervision.",
    definition: "Longest Time Holding Breath Underwater",
  },
]

export default function MyRecordsPage() {
  const [selectedRecord, setSelectedRecord] = useState<(typeof records)[0] | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  function viewRecordDetails(record: (typeof records)[0]) {
    setSelectedRecord(record)
    setShowDetails(true)
  }

  // Table columns definition
  const recordColumns = [
    {
      key: "title",
      header: "Record Title",
      width: "40%",
      render: (value: string) => (
          <span style={{ color: WR_THEME.colors.navy, fontWeight: 500, fontFamily: WR_THEME.fontFamily.sans }}>
          {value}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      width: "20%",
      render: (value: string) => <StatusBadge status={value as "pending" | "approved" | "rejected"} />,
    },
    {
      key: "submittedDate",
      header: "Submitted Date",
      width: "20%",
      render: (value: string) => (
          <span style={{ color: "rgba(0,0,0,0.6)", fontFamily: WR_THEME.fontFamily.sans }}>{value}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "20%",
      render: (_: any, row: { id: string; title: string; status: string; submittedDate: string; value: string; details: string; definition: string }) => (
          <button
              onClick={() => viewRecordDetails(row)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.375rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontFamily: WR_THEME.fontFamily.sans,
                color: WR_THEME.colors.navy,
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
          >
            <Eye style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
            View
          </button>
      ),
    },
  ]

  return (
      <div className="space-y-6">
        <PageHeader
            title="My Records"
            description="View and manage your submitted world records"
            action={<WRButton variant="primary">New Submission</WRButton>}
        />

        <WRCard>
          <WRCardHeader title="Submitted Records" description="All records you have submitted for verification" />
          <CardContent>
            <CustomTable columns={recordColumns} data={records} />
          </CardContent>
        </WRCard>

        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle style={{ color: WR_THEME.colors.navy, fontFamily: WR_THEME.fontFamily.heading }}>
                Record Details
              </DialogTitle>
              <DialogDescription style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                Detailed information about the submitted record
              </DialogDescription>
            </DialogHeader>
            {selectedRecord && (
                <div className="grid gap-4 py-4" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="font-medium col-span-1" style={{ color: WR_THEME.colors.navy }}>
                      Title:
                    </div>
                    <div className="col-span-3">{selectedRecord.title}</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="font-medium col-span-1" style={{ color: WR_THEME.colors.navy }}>
                      Definition:
                    </div>
                    <div className="col-span-3">{selectedRecord.definition}</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="font-medium col-span-1" style={{ color: WR_THEME.colors.navy }}>
                      Status:
                    </div>
                    <div className="col-span-3">
                      <StatusBadge status={selectedRecord.status as "pending" | "approved" | "rejected"} />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="font-medium col-span-1" style={{ color: WR_THEME.colors.navy }}>
                      Value:
                    </div>
                    <div className="col-span-3">{selectedRecord.value}</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="font-medium col-span-1" style={{ color: WR_THEME.colors.navy }}>
                      Submitted:
                    </div>
                    <div className="col-span-3">{selectedRecord.submittedDate}</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <div className="font-medium col-span-1" style={{ color: WR_THEME.colors.navy }}>
                      Details:
                    </div>
                    <div className="col-span-3">{selectedRecord.details}</div>
                  </div>
                </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
  )
}
