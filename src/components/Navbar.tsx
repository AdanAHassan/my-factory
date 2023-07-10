import { logoFont } from "@/styles/fonts";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"



export default function Navbar() {

  const smoothScrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const smoothScrollAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const smoothScrollShop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const smoothScrollGallery = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className="flex flex-row text-4xl w-full h-fit fixed items-center z-50 ">
      <div className="flex flex-row w-2/3 h-full items-center gap-24 pl-24 pr-80 py-4">
        <div onClick={() => smoothScrollHome()} className={`text-6xl ${logoFont.className}`}>MF</div>
        <div onClick={() => smoothScrollAbout()}>About</div>
        <div onClick={() => smoothScrollShop()}>Shop</div>
        <div onClick={() => smoothScrollGallery()}>Gallery</div>
      </div>
      <div className="flex flex-row w-1/3 h-full items-center justify-between pl-8 pr-[10vw] py-7">
        <div className="flex flex-row gap-4">
          <FaInstagram />
          <FaPinterestP />
          <FaFacebookF />
        </div>
        <div className="flex flex-row gap-4">
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  )
}
