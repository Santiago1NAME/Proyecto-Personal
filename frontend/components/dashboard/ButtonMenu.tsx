import { IconXPrueba } from '@/public/icons'
import Link from 'next/link'
import React from 'react'

interface Props{
    redirect: string;
    text: string;
    toogleBotones: () => void;
    children: React.ReactNode;
    isSidebarOpen: boolean;
}

const ButtonMenu: React.FC<Props> = ({ redirect, text, toogleBotones, children, isSidebarOpen }) => {
  return (

    <Link href={redirect} onClick={toogleBotones} className="flex items-center justify-center h-8 text-black text-[14px] hover:bg-[#E3E7EC] menu-sec-aside">
        <div className="w-[30%] flex justify-center">
            <div className="w-[30px] flex justify-center">
                { children }
            </div>
        </div>
        { isSidebarOpen ?
            <div className="w-[70%]">
                <p className="text-[14px] mx-2">{text}</p>
            </div>
        : null }
    </Link>
  )
}

export default ButtonMenu;