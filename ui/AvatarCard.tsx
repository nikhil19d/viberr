import { cn } from "@/lib/utils"
export const AvatarCard = ({ className, children }: { className: string, children: React.ReactNode }) => {
  return (
    <div className={cn("w-80 h-72 rounded-4xl", className)}>
      {children}
    </div>
  )
}
