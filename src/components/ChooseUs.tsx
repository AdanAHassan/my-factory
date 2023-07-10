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
    <div className="flex flex-col bg-primaryOne items-center py-20 gap-8 w-full">
      <h1 className="text-3xl font-semibold">Why choose us?</h1>
      <div className="flex flex-row max-w-screen-xl w-full mx-auto">
        {
          whyContent.map(item => (
            <div className="flex flex-col w-full justify-end h-fit gap-8 items-center fill-red-500">
              <Image
                src={`/${item.src}.svg`}
                width={200}
                height={200}
                alt={item.src}
                className="flex max-h-20 bg-red-40a0"
              />
              <p>{item.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
