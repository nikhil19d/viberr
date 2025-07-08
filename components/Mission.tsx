import { Box } from "@/ui/MissionCard"

export const Mission = () => {
  return (
    <div className="px-40 py-20 font-sans">
      <div className="pb-12">
        <div className="font-semibold text-5xl/tight text-center">
          <h1>Viberr isn`t just an app.</h1>
          <h1>It`s a movement to fix social media.</h1>
        </div>
        <p className="m-auto font-normal text-lg text-center w-3/4 text">We`re building a platform where every like matters, every view counts, and every creator gets fairly compensated for their attention and engagement</p>
      </div>
      <div className="flex justify-between">
        <Box className="box1" heading="Real people, not bots" description="Every engagement comes from verified real user, ensuring authentic interactions." />
        <Box className="box2" heading="Fair earnings for attention" description="Get rewarded for your time and attention with transparent, fair compensation" />
        <Box className="box3" heading="Trusted brand promotions" description="Brands can trust their promotions reach real audiences with genuine interest." />
      </div>
    </div>
  )
}

