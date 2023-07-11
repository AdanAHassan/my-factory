"use client"

import { logoFont } from "@/styles/fonts";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import {  GiHamburgerMenu } from "react-icons/gi"



export default function Navbar() {

  const smoothScrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const smoothScrollAbout = () => {
    window.scrollTo({
      top: 100,
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
    <div className="flex flex-row text-2xl lg:text-4xl w-full h-fit fixed items-center z-50 bg-primaryThree/40 backdrop-blur-md">
      <div className="flex flex-row w-full xl:w-2/3 h-full items-center justify-between px-8 py-4">
        <div onClick={() => smoothScrollHome()} className={`text-3xl lg:text-6xl hover:cursor-pointer ${logoFont.className}`}>MF</div>
        <div onClick={() => smoothScrollAbout()} className="hover:cursor-pointer">About</div>
        <div onClick={() => smoothScrollShop()} className="hover:cursor-pointer">Shop</div>
        <div onClick={() => smoothScrollGallery()} className="hover:cursor-pointer">Gallery</div>
        <div className="flex xl:hidden text-4xl">
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="hidden xl:flex flex-row w-1/3 h-full items-center justify-between pl-8 pr-[10vw] py-7">
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
