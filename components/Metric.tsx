import Image from "next/image"
import image from "@/public/Image.png"
import { MetricsCard } from "@/ui/MetricsCard"
export const Metric = () => {
  return (
    <div className="py-24 font-sans flex flex-col items-center">
      <div className="w-3/4 px-8 mb-12">
        <p className="metric font-semibold text-base mb-3">Activity That Adds Up</p>
        <h1 className="text-4xl font-semibold mb-5">Grow Together - Earn Together.</h1>
        <p className="font-normal text-xl text w-3/4">We’ve built Viberr to be more than just a content app — it’s where real actions lead to real impact for everyone involved.</p>
      </div>
      <div className="flex w-11/12 justify-evenly">
        <div className="relative left-20 top-10">
          <div className="flex mb-14 gap-x-14">
            <MetricsCard count="120+" title="Brand Partners" desc="Trusted by visionaries from top brands to indie startups." />
            <MetricsCard count="100%" title="Joined the Waitlist" desc="Zero bots. Just people who vibe and engage with value." />
          </div>
          <div className="flex gap-x-14">
            <MetricsCard count="12.5k" title="Brand Partners" desc="Thousands have already joined to be the first to experience Viberr." />
            <MetricsCard count="5k" title="5-star reviews" desc="We’re proud of our 5-star rating with over 5k reviews." />
          </div>
        </div>
        <div className="relative left-10">
          <Image src={image} alt="img" width={504} height={490} />
        </div>
      </div>
    </div>
  )
}
