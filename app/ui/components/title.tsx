import { Roboto } from "next/font/google"


const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
    style: 'normal',
})

export default function Title({title}: {title:string}) {

  return (
    <span className={roboto.className}>
        <p className="titleStyling text-xs lg:text-sm xl:text-base 2xl:text-lg cursor-pointer text-[#656A6E] transition-all ">
        {title}
        </p>
    </span>
  )
}
