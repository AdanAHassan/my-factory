import Image from "next/image"

type WhyContent  = {
  text: string,
  src: string
}[]

const whyContent: WhyContent = [
  {
    text: "Handmade",
    src: "Pottery"
  },
  {
    text: "High Quality",
    src: "Award"
  },
  {
    text: "Natural materials",
    src: "EcoHands"
  },
  {
    text: "Holistic approach",
    src: "AccountHand"
  }
]

export default function ChooseUs() {
  return (
    <div className="flex flex-col bg-primaryOne items-center py-20 gap-16 w-full">
      <h1 className="text-4xl font-semibold">Why choose us?</h1>
      <div className="grid grid-cols-1 gap-4 lg:justify-betweem sm:grid-cols-2 md:grid-cols-4 max-w-screen-xl w-full mx-auto">
        {
          whyContent.map(item => (
            <div className="flex flex-col w-full justify-end h-fit gap-8 items-center" key={item.src}>
              <Image
                src={`/my-factory/${item.src}.svg`}
                width={200}
                height={200}
                alt={item.src}
                className="flex max-h-20"
              />
              <p className="text-2xl font-medium">{item.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
