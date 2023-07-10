

export default function Gallery() {
  return (
    <div className="flex flex-col bg-primaryTwo items-center py-20 gap-16 w-full">
      <h1 className="text-3xl font-bold">Our Recent Work</h1>
      <div className="flex flex-row max-w-screen-xl w-full mx-auto h-[500px] bg-white">
        <div className="flex w-2/5 h-full bg-red-900">
          <div className="bg-red-500 w-full h-full"></div>
        </div>
        <div className="flex flex-col w-3/5 h-full bg-blue-900">
          <div className="flex flex-row h-1/2">
            <div className="w-2/5 h-full bg-blue-200"></div>
            <div className="w-3/5 h-full bg-blue-500"></div>
          </div>
          <div className="flex flex-row h-1/2 bg-green-900">
            <div className="w-3/5 h-full bg-green-500"></div>
            <div className="w-2/5 h-full bg-green-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
