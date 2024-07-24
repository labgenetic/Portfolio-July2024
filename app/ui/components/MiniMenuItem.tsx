import { Ubuntu } from "next/font/google"


const ubuntu = Ubuntu({
    weight: "400",
    subsets: ['latin']
})

export default function MiniMenuItem({item, index}:{item: string, index: number}) {
  return (
    <div className={index === 0 ? "px-4 flex items-center justify-center cursor-pointer py-1 hover:bg-yellow-400/50 transition-colors ease-in-out duration-200 " : "px-4 flex items-center justify-center cursor-pointer py-1 hover:bg-yellow-400/50 transition-colors ease-in-out duration-200 border-t-[1px] "}>
        <span className={ubuntu.className}>{item}</span>
    </div>
  )
}
