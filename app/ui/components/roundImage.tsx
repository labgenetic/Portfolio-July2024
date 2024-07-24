import Image from 'next/image';
import roundPic from './../public/roundPic.jpg'
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
    weight: '700',
    subsets: ['latin'],
    style: 'normal',
    display: 'swap'
})

export default function RoundImage() {
  return (
    <div className='h-10 md:h-12 lg:h-14 rounded-full flex items-center gap-2 md:gap-4 lg:gap-5'>
        <Image className='rounded-full h-10 w-fit'
               src={roundPic}
               alt='Pic of author' 
        />
        <span className={ubuntu.className} >
            <p className='text-xs lg:text-base xl:text-lg 2xl:text-xl'>
            Charaf Eddine Charouit
            </p>
        </span>
    </div>
  )
}
