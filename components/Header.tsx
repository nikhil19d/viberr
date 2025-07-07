import Image from "next/image"
import logo from "@/public/viberrlogo 1.png"
import blueheart from "@/public/💙.png"
import handclap from "@/public/👋.png"
import hand from "@/public/👏.png"
import msg from "@/public/💬.png"
import money from "@/public/💸.png"
import memo from "@/public/🤑.png"
import speaker from "@/public/📣.png"
import star from "@/public/✨.png"
import symbol from "@/public/જ⁀➴.png"
import heart from "@/public/❤️.png"
import target from "@/public/🎯.png"
export const Header = () => {

  const list = ['About', 'Services', 'Contact', 'Blog']

  return (
    <div className="header font-sans p-12 w-screen">
      <nav className="flex flex-row justify-between m-auto mb-28 max-w-3/4">
        <div><Image src={logo} alt="logo" /></div>
        <div className="flex flex-row justify-between w-2/5">
          {
            list.map((item, id) => {
              return <button key={id} className="font-semibold text-lg">{item}</button>
            })
          }
        </div>
        <button className="font-semibold text-base px-11 py-3.5 btn text-white rounded-xl">Join</button>
      </nav>
      <div className="flex flex-col m-auto w-5/6 p-28">
        <Image className="absolute top-70 left-50" src={blueheart} alt="heart" />
        <Image className="absolute top-80 left-85" src={handclap} alt="hand" />
        <Image className="absolute top-130 left-40" src={hand} alt="img" />
        <Image className="absolute top-65 left-190" src={star} alt="img" />
        <Image className="absolute top-140 right-60" src={money} alt="img" />
        <Image className="absolute top-55 left-130" src={memo} alt="img" />
        <Image className="absolute top-170 left-190" src={speaker} alt="img" />
        <Image className="absolute top-140 left-100" src={target} alt="img" />
        <Image className="absolute top-85 right-75" src={symbol} alt="img" />
        <Image className="absolute top-70 right-60" src={heart} alt="img" />
        <Image className="absolute top-115 right-40" src={msg} alt="img" />
        <div className="text-6xl font-bold m-auto">
          <h1 className="text-center">Get Paid to Like.</h1>
          <h1 className="text-center">Promote with Real Reach.</h1>
          <h1 className="text-center">Create & Earn.</h1>
        </div>
        <div className="m-auto pt-5 w-1/2">
          <p className="text-center font-normal text-xs">
            Join Viberr - Where real engagement meets real rewards. No bots, no fake likes, just authentic connections that pay.</p>
        </div>
        <div className="m-auto my-7">
          <button className="font-semibold text-xl text-white w-40 h-14 rounded-3xl btn">Join</button>
        </div>
      </div>
    </div>
  )
}
