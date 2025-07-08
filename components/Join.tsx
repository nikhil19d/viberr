import Image from "next/image"
import hand from "@/public/👋.png"
export const Join = () => {
  return (
    <div className="px-32 py-21 font-sans join flex justify-between">
      <div className="w-3/5 flex">
        <Image src={hand} className="w-12 h-12 mr-7" alt="img" />
        <p className="text-5xl font-semibold">Ready to be a part of Viberr ?</p>
      </div>
      <div className="w-1/5">
        <button className="rounded-full text-sm w-full font-semibold btn text-white p-4">Join the Waitlist</button>
      </div>
    </div>
  )
}
