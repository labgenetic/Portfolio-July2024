"use client"

import { useAppSelector } from "@/app/redux/store"
import MiniMenuItem from "./MiniMenuItem"



export default function MiniMenu(){


    const MenuIsOpen = useAppSelector((state)=> state.UiReducer.value.MenuIsOpen)

    const itemsList = ['Home', 'Projects', 'Resume', 'Services', 'About Me']

    return(
<div className={MenuIsOpen ? 'flex absolute MiniMenuPosition' : 'hidden' }>
    {
        MenuIsOpen ? 
        <section className=" flex flex-col sm:hidden border-[1px] rounded-md bg-[#121315]">
            {itemsList.map((item,index)=>{
                return (
                    <MiniMenuItem index={index} item={item} />
                )
            })}            
        </section>
         : null
    } 
</div>
    )
}