import { Inter, Roboto } from "next/font/google"
import Image from "next/image"
import * as Myself from "./../public/removedBg.png"
import Button from "./button"

const roboto = Roboto({
    weight: "700",
    subsets: ["latin"]
})
const inter = Inter({
  weight: "300",
  subsets: ["latin"]
})


export default function IntroductionarySection() {
  return (
    <section className="border-green-600 flex justify-around items-center border-[1px] bg-[#154128] rounded-md p-4 md:p-5 xl:p-6 ">
      <section className="p-4 md:p-5 lg:p-6 xl:p-7 w-1/2 lg:w-1/3 flex flex-col items-start justify-center h-full gap-5 ">
        <p className={roboto.className}>
            <span className="text-xl tracking-wide sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.1] lg:leading-[1.3] xl:leading-[1.2]">Hey, I'm Charaf  a <br/>FullStack Developer</span>
        </p>
        <p className={inter.className}>
          <span className="text-xs lg:text-sm xl:text-base text-gray-400">Full Stack Frontend Developer and Content writing Based in LA, I specialise in Bug fixing, Responsive Web Design, and Visual Developement.</span>
        </p>
        <div>
          <Button Content="Hire me" key={1}/>          
        </div>
      </section>

      <section>
        <Image src={Myself} alt="Me" className="w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96"/>
      </section>

    </section>
  )
}
