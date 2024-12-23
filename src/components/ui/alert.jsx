import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Alert = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "relative w-full rounded-lg border px-4 py-3 text-sm",
      className
    )}
    {...props}
  />
))
Alert.displayName = "Alert"

export { Alert }