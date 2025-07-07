import image from "@/public/image.png"
import { FeatureBox } from "@/ui/FeatureBox"
import Image from "next/image"
import target from "@/public/🎯.png"
import money from "@/public/🤑.png"
import star from "@/public/✨.png"
import clap from "@/public/👏.png"
import heart from "@/public/❤️.png"
import stat from "@/public/📈.png"
export const Features = () => {
  return (
    <div className="py-11 px-18 font-sans flex flex-col items-center text-center border-2 border-black">
      <p className="w-36 h-9 px-4 py-2 m-auto review text-base rounded-full mb-5 font-normal text-center items-center">Key Features</p>
      <h1 className="font-semibold text-5xl mb-5">Power Up your Content with Viberr</h1>
      <p className="review-text text-base m-auto font-normal w-3/5 px-8 mb-12">Viberr offers features built for real growth and real rewards. From verified views to instant payouts — everything just works.</p>
      <div className="relative">
        <Image src={image} alt="img" />
        <FeatureBox className="f1bc absolute top-15 right-130" desc="Grow based on impact, not followers or vanity metrics.">
          <div className="f1 w-16 h-10 rounded-full mr-4 flex text-center justify-center items-center">
            <Image src={target} alt="img" height={30} width={30} />
          </div>
        </FeatureBox>
        <FeatureBox className="f2bc absolute top-18 left-110" desc="Earn and withdraw easily with in-app wallet integration.">
          <div className="f2 w-16 h-10 rounded-full mr-4 flex text-center justify-center items-center">
            <Image src={money} alt="img" height={24} width={24} />
          </div>
        </FeatureBox>
        <FeatureBox className="f3bc absolute top-60 right-130" desc="Track performance, engagement, and earnings instantly.">
          <div className="f3 w-16 h-10 rounded-full mr-4 flex text-center justify-center items-center">
            <Image src={stat} alt="img" height={20} width={20} />
          </div>
        </FeatureBox>
        <FeatureBox className="f4bc absolute bottom-200 left-30" desc="No Bots, Only Real Engagement — no spam or fake likes.">
          <div className="f4 w-16 h-10 rounded-full mr-4 flex text-center justify-center items-center">
            <Image src={heart} alt="img" height={20} width={20} />
          </div>
        </FeatureBox>
        <FeatureBox className="f5bc absolute bottom-200 left-30" desc="A single clap supports creators financially.">
          <div className="f5 w-12 h-10 rounded-full mr-4 flex text-center justify-center items-center">
            <Image src={clap} alt="img" height={20} width={20} />
          </div>
        </FeatureBox>
        <FeatureBox className="f6bc absolute bottom-200 left-30" desc="Unified All-in-One Platform Everything you need to watch, create, and promote in one app.">
          <div className="f6 w-28 h-10 rounded-full mr-4 flex text-center justify-center items-center">
            <Image src={star} alt="img" height={25} width={25} />
          </div>
        </FeatureBox>
      </div>
    </div>
  )
}
