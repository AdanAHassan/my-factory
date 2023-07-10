import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="flex flex-row bg-primaryOne w-full justify-between p-8 items-center">
      <div className="flex flex-col">
        <p>support@myfabrique.com</p>
        <p>+375 29 303 52 92</p>
      </div>
      <div className="flex flex-row text-2xl gap-1">
        <FaInstagram />
        <FaPinterestP />
        <FaFacebookF />
      </div>
    </div>
  )
}
