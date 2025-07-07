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
    <div className="py-11 px-18 font-sans flex flex-col items-center text-center">
      <p className="w-36 h-9 px-4 py-2 m-auto review text-base rounded-full mb-5 font-normal text-center items-center">Key Features</p>
      <h1 className="font-semibold text-5xl mb-5">Power Up your Content with Viberr</h1>
      <p className="review-text text-base m-auto font-normal w-3/5 px-8 mb-12">Viberr offers features built for real growth and real rewards. From verified views to instant payouts — everything just works.</p>
      <div className="relative">
        <Image src={image} alt="img" />
        <FeatureBox className="f1bc absolute top-15 right-120" cls="f1" desc="Grow based on impact, not followers or vanity metrics.">
            <Image src={target} alt="img" height={30} width={30} />
        </FeatureBox>
        <FeatureBox className="f2bc absolute top-18 left-110" cls="f2" desc="Earn and withdraw easily with in-app wallet integration.">
            <Image src={money} alt="img" height={24} width={24} />
        </FeatureBox>
        <FeatureBox className="f3bc absolute top-60 right-130" cls="f3" desc="Track performance, engagement, and earnings instantly.">
            <Image src={stat} alt="img" height={20} width={20} />
        </FeatureBox>
        <FeatureBox className="f4bc absolute top-70 left-130" cls="f4" desc="No Bots, Only Real Engagement — no spam or fake likes.">
            <Image src={heart} alt="img" height={20} width={20} />
        </FeatureBox>
        <FeatureBox className="f5bc absolute bottom-10 right-110" cls="f5 w-12 h-10" desc="A single clap supports creators financially.">
            <Image src={clap} alt="img" height={20} width={20} />
        </FeatureBox>
        <FeatureBox className="f6bc absolute bottom-5 left-110" cls="f6 w-28 h-10" desc="Unified All-in-One Platform Everything you need to watch, create, and promote in one app.">
            <Image src={star} alt="img" height={25} width={25} />
        </FeatureBox>
      </div>
    </div>
  )
}
