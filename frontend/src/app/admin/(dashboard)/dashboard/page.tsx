import { Award, CheckCircle, Clock } from "lucide-react"
import Image from "next/image"

import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WRButton } from "@/components/dashboard/buttons"
import { WRCard, WRCardHeader, WRStatsCard } from "@/components/dashboard/cards"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { WR_THEME } from "@/components/dashboard/theme-constants"
import { CustomTable } from "@/components/tables/custom-table"

// Mock data - replace with actual data fetching in production
const partnerName = "John Smith"
const stats = [
    { title: "Total Submitted", value: 24, icon: Award, variant: "default" },
    { title: "Approved", value: 18, icon: CheckCircle, variant: "default" },
    { title: "Pending", value: 6, icon: Clock, variant: "accent" },
]
const recentVKeys = [
    { id: "VK-1234-5678", status: "used", usedAt: "2023-10-15" },
    { id: "VK-2345-6789", status: "unused", usedAt: null },
    { id: "VK-3456-7890", status: "used", usedAt: "2023-10-10" },
]

const vkeyColumns = [
    { key: "id", header: "Key", width: "40%" },
    {
        key: "status",
        header: "Status",
        width: "30%",
        render: (value: string) => <StatusBadge status={value as "used" | "unused"} />,
    },
    {
        key: "usedAt",
        header: "Used At",
        width: "30%",
        render: (value: string | null) => (
            <span style={{ color: "rgba(0,0,0,0.6)", fontFamily: WR_THEME.fontFamily.sans }}>{value || "Not used yet"}</span>
        ),
    },
]
export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Dashboard"
                description={`Welcome back, ${partnerName}!`}
                action={<WRButton variant="secondary">Make a Record</WRButton>}
            />

            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                    <WRStatsCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        variant={stat.variant as "default" | "accent"}
                    />
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <WRCard>
                    <WRCardHeader
                        title="Recent VKeys"
                        description="View your most recent verification keys"
                        action={
                            <Button
                                variant="ghost"
                                size="sm"
                                style={{
                                    color: WR_THEME.colors.navy,
                                    fontFamily: WR_THEME.fontFamily.sans,
                                }}
                            >
                                View All
                            </Button>
                        }
                    />
                    <CardContent>
                        <div className="space-y-4">
                            <CustomTable columns={vkeyColumns} data={recentVKeys} />
                        </div>
                    </CardContent>
                </WRCard>

                <WRCard>
                    <WRCardHeader title="Make it or Break it!" description="Ready to set a new world record?" />
                    <CardContent className="space-y-4">
                        <div className="flex justify-center">
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/placeholder.svg?height=128&width=128"
                                    alt="World Records Logo"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-4 text-sm text-muted-foreground" style={{ fontFamily: WR_THEME.fontFamily.sans }}>
                                Submit your record attempt and join the ranks of record holders worldwide.
                            </p>
                            <WRButton variant="primary" className="w-full">
                                Submit New Record
                            </WRButton>
                        </div>
                    </CardContent>
                </WRCard>
            </div>
        </div>
    )
}
