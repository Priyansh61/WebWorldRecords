"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Record = {
    id: string
    title: string
    status: "pending" | "approved" | "rejected"
    submittedDate: string
    recordValue: string
    recordDefinition: string
    details: string
}

const records: Record[] = [
    {
        id: "REC-1234",
        title: "Maximum pull-ups in one minute",
        status: "approved",
        submittedDate: "2023-05-01T09:30:00",
        recordValue: "42 repetitions",
        recordDefinition: "Most pull-ups in one minute",
        details:
            "Performed at City Gym with two official witnesses present. All repetitions were performed with full extension and chin above the bar.",
    },
    {
        id: "REC-2345",
        title: "Fastest marathon dressed as a superhero",
        status: "pending",
        submittedDate: "2023-05-03T14:45:00",
        recordValue: "2:45:30",
        recordDefinition: "Fastest marathon dressed as a superhero",
        details: "Completed the City Marathon dressed as Superman. Costume included full bodysuit, cape, and boots.",
    },
    {
        id: "REC-3456",
        title: "Longest plank hold",
        status: "rejected",
        submittedDate: "2023-04-15T11:20:00",
        recordValue: "8 hours 15 minutes",
        recordDefinition: "Longest plank hold",
        details: "Attempted at home with two witnesses. Video evidence provided shows breaks in form at several points.",
    },
    {
        id: "REC-4567",
        title: "Most basketball free throws in one minute",
        status: "approved",
        submittedDate: "2023-05-10T11:20:00",
        recordValue: "37 successful throws",
        recordDefinition: "Most basketball free throws in one minute",
        details:
            "Performed at University Basketball Court with official referee present. All throws were made from the free throw line.",
    },
    {
        id: "REC-5678",
        title: "Tallest stack of coins",
        status: "pending",
        submittedDate: "2023-05-12T16:30:00",
        recordValue: "7.5 meters",
        recordDefinition: "Tallest stack of coins",
        details: "Built using only standard US quarters. Stack was free-standing for the required 30 seconds.",
    },
]

interface MyRecordsTableProps {
    status?: "pending" | "approved" | "rejected"
}

export function MyRecordsTable({ status }: MyRecordsTableProps) {
    const [selectedRecord, setSelectedRecord] = useState<Record | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const filteredRecords = status ? records.filter((record) => record.status === status) : records

    function handleViewDetails(record: Record) {
        setSelectedRecord(record)
        setIsDialogOpen(true)
    }

    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Record ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Submitted Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredRecords.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No records found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredRecords.map((record) => (
                                <TableRow key={record.id}>
                                    <TableCell className="font-medium">{record.id}</TableCell>
                                    <TableCell>{record.title}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={
                                                record.status === "approved"
                                                    ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                                                    : record.status === "pending"
                                                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800"
                                                        : "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
                                            }
                                        >
                                            {record.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{new Date(record.submittedDate).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm" onClick={() => handleViewDetails(record)}>
                                            <Eye className="h-4 w-4 mr-2" />
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {selectedRecord && (
                    <DialogContent className="sm:max-w-[525px]">
                        <DialogHeader>
                            <DialogTitle>{selectedRecord.title}</DialogTitle>
                            <DialogDescription>Record ID: {selectedRecord.id}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="text-sm font-medium">Status:</span>
                                <div className="col-span-3">
                                    <Badge
                                        variant="outline"
                                        className={
                                            selectedRecord.status === "approved"
                                                ? "bg-green-100 text-green-800"
                                                : selectedRecord.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : "bg-red-100 text-red-800"
                                        }
                                    >
                                        {selectedRecord.status}
                                    </Badge>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="text-sm font-medium">Submitted:</span>
                                <span className="col-span-3">{new Date(selectedRecord.submittedDate).toLocaleString()}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="text-sm font-medium">Definition:</span>
                                <span className="col-span-3">{selectedRecord.recordDefinition}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <span className="text-sm font-medium">Value:</span>
                                <span className="col-span-3">{selectedRecord.recordValue}</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <span className="text-sm font-medium">Details:</span>
                                <p className="col-span-3 text-sm">{selectedRecord.details}</p>
                            </div>
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </>
    )
}
