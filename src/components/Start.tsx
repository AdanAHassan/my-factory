import { logoFont } from "@/styles/fonts";


export default function Start() {
  return (
    <div className="flex flex-row bg-primaryTwo w-full min-h-screen text-2xl">
      <div className="flex flex-col w-2/3">
        <div className="flex flex-col justify-center h-full max-w-screen-xl mx-auto gap-28">
          <h1 className={`text-[175px] z-30 ${logoFont.className}`}>My Fabrique</h1>
          <div className="flex flex-col gap-4 w-[600px] ml-8">
            <p className="font-bold text">Make your home even more comfortable with handmade ceramics</p>
            <p>20% discount on your first purchase</p>
            <button className="bg-primaryThree text-primaryOne w-80 px-24 py-2 w-fit rounded-full">More</button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-1/3 bg-primaryThree">
        <div className="w-[40vw] h-[70vh] bg-red-500 absolute top-[20vh] right-[10vw] z-10"></div>
      </div>
    </div>
  )
}
