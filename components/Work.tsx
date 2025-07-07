import Image from "next/image"
import vector from "@/public/work.png"
import { Box } from "@/ui/WorkCard"
export const Work = () => {
  return (
    <div className="px-20 py-40 font-sans">
      <div className="text-center p-10">
        <h1 className="font-semibold pb-4 text-5xl">How Viberr Works</h1>
        <p className="font-normal text text-xl">One platform. Three roles. Endless ways to engage, grow, and get rewarded.</p>
      </div>
      <Image className="m-auto" src={vector} alt="vector" />
      <div className="flex justify-between m-10">
        <Box className="box1" title="Viewer" heading="Watch, Like, Earn - It's That Simple" description="Watch content you love and get rewarded for every like. Enjoy an endless feed that pays you back. No tricks -- just real earnings, instantly." />
        <Box className="box2" title="Brand Promoter" heading="Promote Smarter - Reach Real People" description="Boost your brand with real, verified engagement. Set your budget and reach your ideal audience. Track performance and ROI in real-time." />
        <Box className="box3" title="Content Creator" heading="Create Content - Grow - Get Paid" description="Watch content you love and get rewarded for every like. Enuoy an endless feed that pays you back. No tricks -- just real earnings instantly." />
      </div>
    </div>
  )
}
