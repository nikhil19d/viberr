import { cn } from "@/lib/utils"
import img from "@/public/img.png"
import Image from "next/image"

export const Box = ({ title, heading, description, className }: { title: string, className: string, heading: string, description: string }) => {
  return (
    <div className={cn("h-64 w-80 flex flex-col text-center rounded-2xl content-center justify-center", className)}>
      <div>
        <Image className='m-auto my-0 pb-2' src={img} alt="img" />
        <p className="font-semibold text-base">{title}</p>
      </ div>
      <h1 className="font-normal text-sm/loose">{heading}</h1>
      <p className="font-normal text-xs/snug m-auto my-0 mx-2 text">{description}</p>
    </div>
  )
}
