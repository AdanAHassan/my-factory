import About from "@/components/About";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Shop from "@/components/Shop";
import Start from "@/components/Start";
import Gallery from "@/components/Gallery";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-primaryFour">
      <Navbar />
      <Start />
      <About />
      <Shop />
      <ChooseUs />
      <Gallery />
      <Footer />
    </main>
  )
}
