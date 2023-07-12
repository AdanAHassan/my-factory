import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col bg-primaryOne items-center py-20 gap-8 md:gap-16">
      <h1 className="text-4xl font-semibold">About Us</h1>
      <div className="relative flex flex-row justify-end">
        <div className="hidden lg:flex absolute right-[calc((200%/3)-100px)] bg-green-500 w-80 h-[calc(75%)] top-16">
            <Image
                src="/my-factory/Tiles.webp"
                width={500}
                height={500}
                alt="INSERT"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="p-12 lg:py-20 lg:px-40 lg:bg-primaryTwo lg:w-2/3 flex flex-col gap-4 text-xl">
          <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia.</p>
          <p>Sit iraure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </div>
      </div>
    </div>
  )
}
