import Image from "next/image"

type ImageContent = {
  src: string,
  alt: string,
  title: string
}[]

const imageContent: ImageContent = [
  {
    title: "Kitchenware",
    src: "Kitchenware.webp",
    alt: "Placeholder alt"
  },
  {
    title: "Interior experiences",
    src: "InteriorExperiences.webp",
    alt: "Placeholder alt"
  },
  {
    title: "Decorations",
    src: "StartVase.webp",
    alt: "Placeholder alt"
  },
  {
    title: "Tiles",
    src: "Tiles.webp",
    alt: "Placeholder alt"
  }
]



export default function Shop() {
  return (
    <div className="flex flex-col bg-primaryTwo items-center py-20 gap-8 md:gap-16 w-full h-fit px-12">      
      <h1 className="text-4xl font-semibold">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:justify-between w-full h-full gap-8">
        {
          imageContent.map(item => (
            <div className="relative flex flex-col w-full h-80 items-center" key={item.title}>
              <Image 
                src={`${item.src}`}
                alt={item.alt}
                width={500}
                height={500}
                className="w-full h-full bg-blue-500 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-primaryThree text-primaryOne p-4 text-center text-2xl font-medium">{item.title}</div>
            </div>
          ))
        }
      </div>
      <button className="px-8 py-2 text-primaryOne bg-primaryThree rounded-full text-2xl font-medium">View catalog</button>
    </div>
  )
}
