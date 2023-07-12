import { logoFont } from "@/styles/fonts";
import Image from "next/image";


export default function Start() {
  return (
    <div className="flex flex-row bg-primaryTwo w-full h-screen text-2xl">
      <div className="flex flex-col w-full md:w-2/3 z-30 items-center lg:items-start">
        <div className="flex flex-col justify-center h-full max-w-screen-xl mx-auto gap-8 pl-8 md:gap-12 xl:gap-24">
          <h1 className={`text-[80px] md:text-[100px] xl:text-[175px] ${logoFont.className}`}>My Fabrique</h1>
          <div className="flex flex-col gap-4 lg:w-[600px] px-8">
            <p className="font-bold">Make your home even more comfortable with handmade ceramics</p>
            <p className="pb-8 lg:pb-0">20% discount on your first purchase</p>
            <button className="bg-primaryThree text-primaryOne w-80 px-24 py-2 w-fit rounded-full">More</button>
          </div>
        </div>
      </div>
      <div className="hidden relative md:flex flex-col w-1/3 bg-primaryThree">
        <Image
          className="w-[40vw] h-[70vh] bg-red-500 absolute top-[20vh] right-[10vw] z-10"
          src="/my-factory/StartVase.webp"
          alt="Collection of ceramic items"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
