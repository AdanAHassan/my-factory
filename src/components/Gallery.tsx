import Image from "next/image";


export default function Gallery() {
  return (
    <div className="flex flex-col bg-primaryTwo items-center py-20 gap-4 w-full">
      <h1 className="text-4xl font-semibold">Our Recent Work</h1>
      <div className="flex flex-row max-w-screen-xl w-full mx-auto h-[500px] p-12 bg-transparent xl:p-0">
        <Image
          src={`/Shelf.jpg`}
          alt="Pottery on a shelf"
          width={500}
          height={500}
          className="flex w-2/5 h-full bg-red-900 object-cover"
        />
        <div className="flex flex-col w-3/5 h-full bg-red-900">
          <div className="flex flex-row h-1/2 w-full">
              <Image
                src={`FloraTiles.jpg`}
                alt="Wall tiles in a bathroom"
                width={500}
                height={500}
                className="hidden md:flex md:w-2/5 h-full bg-blue-200 object-cover"
              />
              <Image
                src={`/Vessel.jpg`}
                alt="Ceramic items placed around a table"
                width={500}
                height={500}
                className="w-full md:w-3/5 h-full bg-blue-500 object-cover"
              />
          </div>
          <div className="flex flex-row h-1/2 bg-orange-900">
              <Image
                src={`my-factory/StartVase.webp`}
                alt="Wall tiles in a bathroom"
                width={500}
                height={500}
                className="w-full md:w-3/5 h-full bg-green-500 object-cover" 
              />
              <Image
                src={`/my-factory/InteriorExperiences.webp`}
                alt="Ceramic items placed around a table"
                width={500}
                height={500}
                className="hidden md:flex md:w-2/5 h-full bg-green-200 object-cover"
              />
          </div>
        </div>
      </div>
    </div>
  )
}
