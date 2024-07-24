import { Ubuntu } from "next/font/google"


const ubuntu = Ubuntu({
    weight: "500",
    subsets: ['latin']
})
export default function Button({Content}: {Content: String}) {
  return (
    <button className="bg-[#F3DA64] rounded-lg p-2.5 text-[#000403] cleverButton transition-all text-xs lg:text-sm xl:text-base ">
        <span className={ubuntu.className}>
    {Content}
        </span>
    </button>
  )
}
