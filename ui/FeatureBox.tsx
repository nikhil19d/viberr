import { cn } from "@/lib/utils";

export const FeatureBox = ({ className, children, desc }: { className: string, children: React.ReactNode, desc: string }) => {
  return (
    <div className={cn("p-4 rounded-4xl items-center w-80 h-24 flex", className)}>
      {children}
      <div className=" font-normal text-sm text-start">{desc}</div>
    </div>
  )
}
