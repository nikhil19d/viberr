import insta from "@/public/insta.png"
import fb from "@/public/fb.png"
import git from "@/public/git.png"
import x from "@/public/x.png"
import Image from "next/image"

export const Footer = () => {
  return (
    <div className="py-5 px-34 flex justify-between font-sans mx-5">
      <div className="w-1/3 flex py-10 justify-evenly flex-col" >
        <h1 className="font-bold text-sm mb-7">About Viberr</h1>
        <p className="text-base font-normal text mb-7">Viberr is a content-powered economy where viewers earn, creators grow, and promoters engage authentically. No bots, no fluff — just real rewards for real people. </p>
        <div className="flex justify-between w-2/5">
          <Image src={x} alt="x" />
          <Image src={fb} alt="fb" />
          <Image src={insta} alt="insta" />  
          <Image src={git} alt="git" />
        </div>
      </div>
      <div className="flex">
        <div className="mr-28 flex justify-evenly flex-col text-sm">
          <div className="mb-2 font-semibold text-lg text-black">
            <h1>Company</h1>
          </div>
          <p>About Us</p>
          <p>Features</p>
          <p>Our Mission</p>
          <p>Media kit</p>
        </div>
        <div className="mr-28 flex justify-evenly flex-col text-sm">
          <div className="mb-2 font-semibold text-lg text-black">
            <h1>Help</h1>
          </div>
          <p>FAQs</p>
          <p>Contact Support</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
