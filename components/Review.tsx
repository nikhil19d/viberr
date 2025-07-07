import { AvatarCard } from "@/ui/AvatarCard"
import Image from "next/image"
import avatar1 from "@/public/avatar1.png"
import avatar2 from "@/public/avatar2.png"
import avatar3 from "@/public/avatar3.png"
import { ReviewCard } from "@/ui/ReviewCard"

export const Review = () => {
  return (
    <div className="py-11 px-18 font-sans flex flex-col items-center text-center">
      <p className="w-36 h-9 px-4 py-2 m-auto review text-base rounded-full mb-5 font-normal text-center items-center">Reviews</p>
      <h1 className="font-semibold text-5xl mb-5">Real Stories from Real Viberr Users</h1>
      <p className="review-text text-base m-auto font-normal w-3/5 px-8 mb-12">Whether you're watching, promoting, or creating -- Viberr gives you the tools to grow, earn, and connect. Here's what our users have to say.</p>
      <div className="flex justify-between w-5/6">
        <div>
          <AvatarCard className="avatar1 flex items-end justify-center mb-4">
            <Image src={avatar2} alt="img" />
          </AvatarCard>
          <ReviewCard className="avatar1_review" name="Ravi K." desc="“No stress, no targets — I just enjoy content, like what I love, and earn. Viberr changed how I use social apps.”" />
        </div>
        <div>
          <ReviewCard className="avatar2_review" name="Ayesha N." desc="“Finally, a platform where small brands can grow without wasting money. Viberr gives transparent and organic reach.”" />
          <AvatarCard className="avatar2 flex items-end justify-center mt-4">
            <Image src={avatar3} alt="img" />
          </AvatarCard>
        </div>
        <div>
          <AvatarCard className="avatar3 flex items-end justify-center mb-4">
            <Image src={avatar1} alt="img" />
          </AvatarCard>
          <ReviewCard className="avatar3_review" name="Rahul D." desc='“Viberr gives me what other platforms never did — visibility, support, and real earnings.”' />
        </div>
      </div>
    </div>
  )
} 
