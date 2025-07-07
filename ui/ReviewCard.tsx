import Image from "next/image"
import { cn } from "@/lib/utils"
import rating from "@/public/rating.png"
export const ReviewCard = ({ name, desc, className }: { name: string, desc: string, className: string }) => {
  return (
    <div className={cn("font-sans flex flex-col w-80 h-48 text-start justify-center gap-3 p-4 rounded-4xl", className)}>
      <Image src={rating} alt="rating" />
      <p className="text-sm font-normal">{desc}</p>
      <h1 className="text-sm font-semibold">{name}</h1>
    </div>
  )
}
