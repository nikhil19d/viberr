import { cn } from "@/lib/utils"
import img from "@/public/img.png"
import Image from "next/image"

export const Box = ({ heading, description, className }: { className: string, heading: string, description: string }) => {
  return (
    <div className={cn("h-64 w-80 flex flex-col text-center rounded-2xl content-center justify-center", className)}>
      <Image className='m-auto my-0' src={img} alt="img" />
      <h1 className="font-bold text-xl/loose">{heading}</h1>
      <p className="font-normal text-sm m-auto my-0 w-4/5 text">{description}</p>
    </div>
  )
}
