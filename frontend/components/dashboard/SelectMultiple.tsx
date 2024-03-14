import { IconRight, IconDown } from '@/public/icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ButtonMenu from './ButtonMenu';
import dynamic from 'next/dynamic';
import Default from '@/public/Icons/Default';

interface Props {
    menu: any;
    icon: React.ReactNode | null;
    isSidebarOpen: boolean;
}

const SelectMultiple: React.FC<Props> = ({ menu, icon, isSidebarOpen }) => {
    const [mostrarBotones, setMostrarBotones] = useState(false);

    const toggleBotones = () => {
        setMostrarBotones(!mostrarBotones);
    };

  return (
    <div>
        <Link href={ menu.redirect == '#' ? '#' : menu.redirect } onClick={toggleBotones} className="flex items-center justify-center h-10 hover:bg-[#E3E7EC] text-black text-[18px] menu-prin-aside">
            <div className="flex justify-center">
                <div className="w-[50px] flex justify-center">
                    {icon}
                </div>
            </div>
            { isSidebarOpen ?
                <div className="w-[100%] flex justify-between items-center"><p className="text-[16px]">{ menu.menu }</p> 
                    { menu.submenus.length > 0 ?
                        <div>
                            { mostrarBotones ? <IconDown></IconDown> : <IconRight></IconRight>}
                        </div> : null
                    }
                </div> : null
            }

        </Link>
        { mostrarBotones && menu.submenus && menu.submenus.map(function(submenu: any, index: any) {
            let IconComponent = submenu.icon;
            if(IconComponent != ''){
                IconComponent = dynamic(() => import(`@/public/Icons/${submenu.icon}.tsx`), { ssr: false });
            }
            return (
                <ButtonMenu key={index} redirect={ submenu.redirect } text={submenu.menu} toogleBotones={toggleBotones} isSidebarOpen={isSidebarOpen}>{ IconComponent ? <IconComponent /> : <Default/>}</ButtonMenu>
            )
        }) }
    </div>
  )
}

export default SelectMultiple;