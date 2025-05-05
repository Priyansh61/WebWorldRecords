"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { PageHeader } from "@/components/dashboard/page-header"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader } from "@/components/dashboard/cards"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { styles } from "@/components/dashboard/styles"

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

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Records"
        description="View and manage your submitted world records"
        action={<WRButton variant="primary">New Submission</WRButton>}
      />

      <WRCard>
        <WRCardHeader title="Submitted Records" description="All records you have submitted for verification" />
        <CardContent className="p-0">
          <Table>
            <TableHeader className={styles.tableHeader}>
              <TableRow>
                <TableHead>Record Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className={styles.tableCell}>{record.title}</TableCell>
                  <TableCell>
                    <StatusBadge status={record.status as "pending" | "approved" | "rejected"} />
                  </TableCell>
                  <TableCell>{format(new Date(record.submittedDate), "PPP")}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => viewRecordDetails(record)}
                      className="text-[#1e3a8a]"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </WRCard>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="text-[#1e3a8a]">Record Details</DialogTitle>
            <DialogDescription>Detailed information about the submitted record</DialogDescription>
          </DialogHeader>
          {selectedRecord && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium col-span-1 text-[#1e3a8a]">Title:</div>
                <div className="col-span-3">{selectedRecord.title}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium col-span-1 text-[#1e3a8a]">Definition:</div>
                <div className="col-span-3">{selectedRecord.definition}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium col-span-1 text-[#1e3a8a]">Status:</div>
                <div className="col-span-3">
                  <StatusBadge status={selectedRecord.status as "pending" | "approved" | "rejected"} />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium col-span-1 text-[#1e3a8a]">Value:</div>
                <div className="col-span-3">{selectedRecord.value}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium col-span-1 text-[#1e3a8a]">Submitted:</div>
                <div className="col-span-3">{format(new Date(selectedRecord.submittedDate), "PPP")}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium col-span-1 text-[#1e3a8a]">Details:</div>
                <div className="col-span-3">{selectedRecord.details}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
