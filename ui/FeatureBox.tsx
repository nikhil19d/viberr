import { cn } from "@/lib/utils";

export const FeatureBox = ({ className, children, desc, cls }: { className: string, children: React.ReactNode, desc: string, cls: string }) => {
  return (
    <div className={cn("p-4 rounded-4xl items-center w-80 h-24 flex", className)}>
        <div className={cn("w-16 h-10 rounded-full mr-4 flex text-center justify-center items-center",cls)}>
          {children}
        </div>
      <div className=" font-normal text-sm text-start">{desc}</div>
    </div>
  )
}
