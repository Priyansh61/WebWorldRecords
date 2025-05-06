import type React from "react"
import { tableStyles } from "./table-styles"

interface Column {
    key: string
    header: string
    width?: string
    render?: (value: any, row: any) => React.ReactNode
}

interface CustomTableProps {
    columns: Column[]
    data: any[]
    className?: string
}

export function CustomTable({ columns, data, className }: CustomTableProps) {
    return (
        <div style={{ ...tableStyles.container, marginTop: '8px' }} className={className}>
            <table style={{  width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            style={{
                                ...tableStyles.cell,
                                ...tableStyles.header,
                                width: column.width,
                                textAlign: "left",
                                fontSize: "0.875rem",
                            }}
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        style={{
                            ...tableStyles.row,
                            ...(rowIndex === data.length - 1 ? tableStyles.lastRow : {}),
                            backgroundColor: rowIndex % 2 === 0 ? "white" : "rgba(0,0,0,0.01)",
                        }}
                    >
                        {columns.map((column, colIndex) => (
                            <td
                                key={`${rowIndex}-${column.key}`}
                                style={{
                                    ...tableStyles.cell,
                                    ...(colIndex === 0 ? tableStyles.keyCell : {}),
                                }}
                            >
                                {column.render ? column.render(row[column.key], row) : row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
