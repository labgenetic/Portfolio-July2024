"use client"
import Image from 'next/image'
import featherMenu from './../public/feathermenu.svg'
import { useState } from 'react'
import {SwitchMenu} from "@/app/features/ui-slice"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/redux/store'


export default function BurgerMenu() {
  const dispatch = useDispatch<AppDispatch>()
    const triggerChange =()=>{
      dispatch(SwitchMenu())
        
    }
  return (
    <button onClick={triggerChange} className='block sm:hidden w-fit h-fit border-[1px] rounded-full border-[#F3DA64] p-1 hover:bg-[#F3DA6460] duration-200 transition-all'>
        <Image 
        src={featherMenu}
        alt='menu'
        />
    </button>
        
  )
}
