import Image from "next/image"

type ImageContent = {
  src: string,
  alt: string,
  title: string
}[]

const imageContent: ImageContent = [
  {
    title: "Kitchenware",
    src: "https://placehold.co/600x400/orange/white.png",
    alt: "Placeholder alt"
  },
  {
    title: "Interior experiences",
    src: "https://placehold.co/600x400/orange/white.png",
    alt: "Placeholder alt"
  },
  {
    title: "Decorations",
    src: "https://placehold.co/600x400/orange/white.png",
    alt: "Placeholder alt"
  },
  {
    title: "Tiles",
    src: "https://placehold.co/600x400/orange/white.png",
    alt: "Placeholder alt"
  }
]



export default function Shop() {
  return (
    <div className="flex flex-col bg-primaryTwo items-center py-20 gap-16 w-full h-screen">      
      <h1 className="text-6xl font-semibold">Shop</h1>
      <div className="flex flex-row gap-4 w-full h-full px-12">
        {
          imageContent.map(item => (
            <div className="relative flex flex-col w-full h-full items-center" key={item.title}>
              <div className="w-full h-full bg-blue-500"></div>
              <div className="absolute bottom-0 w-full bg-primaryThree text-primaryOne px-8 py-2 text-center">{item.title}</div>
            </div>
          ))
        }
      </div>
      <button className="px-4 py-1 text-primaryOne bg-primaryThree rounded-full">View catalog</button>
    </div>
  )
}
