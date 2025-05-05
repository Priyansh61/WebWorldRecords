import { cva } from "class-variance-authority"

// Reusable styles that don't require globals.css modifications
export const styles = {
  // Layout styles
  pageHeader: "rounded-lg bg-white p-6 shadow-sm",
  pageTitle: "text-3xl font-bold tracking-tight text-[#1e3a8a]",
  pageDescription: "text-muted-foreground",

  // Card styles
  card: "border-t-4 border-t-[#1e3a8a] shadow-md transition-all duration-200 hover:shadow-lg",
  cardAccent: "border-t-4 border-t-[#dc2626] shadow-md transition-all duration-200 hover:shadow-lg",
  cardHeader: "border-b bg-muted/30",
  cardTitle: "text-[#1e3a8a]",

  // Table styles
  tableHeader: "bg-muted/30",
  tableCell: "font-medium text-[#1e3a8a]",

  // Form styles
  formLabel: "text-[#1e3a8a]",
  uploadArea:
    "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted border-[#1e3a8a]/20",

  // Icon container
  iconContainer: {
    default: "rounded-full p-2 bg-[#1e3a8a]/10",
    accent: "rounded-full p-2 bg-[#dc2626]/10",
  },

  // Icon colors
  iconColor: {
    default: "text-[#1e3a8a]",
    accent: "text-[#dc2626]",
  },

  // Text colors
  textColor: {
    default: "text-[#1e3a8a]",
    accent: "text-[#dc2626]",
    muted: "text-muted-foreground",
  },
}

// Button variants that don't require modifying the button component
export const wrButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90",
        secondary: "bg-[#dc2626] text-white hover:bg-[#dc2626]/90",
        outline: "border border-[#1e3a8a] bg-transparent text-[#1e3a8a] hover:bg-[#1e3a8a]/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)
