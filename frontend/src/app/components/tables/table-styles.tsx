import { WR_THEME } from "../dashboard/theme-constants"

export const tableStyles = {
// Table container
container: {
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    border: "1px solid rgba(0,0,0,0.08)",
},

// Table header
header: {
    backgroundColor: WR_THEME.colors.navy + "08", // Very light navy with opacity
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    fontFamily: WR_THEME.fontFamily.heading,
    fontWeight: 600,
    color: WR_THEME.colors.navy,
},

// Table row
row: {
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    transition: "background-color 0.2s ease",
":hover": {
    backgroundColor: "rgba(0,0,0,0.01)",
},
},

// Table cell
cell: {
    padding: "0.75rem 1rem",
    fontFamily: WR_THEME.fontFamily.sans,
    verticalAlign: "middle",
},

// Key cell (first column)
keyCell: {
    color: WR_THEME.colors.navy,
    fontWeight: 500,
    fontFamily: WR_THEME.fontFamily.sans,
},

// Last row (no border)
lastRow: {
    borderBottom: "none",
},
}
