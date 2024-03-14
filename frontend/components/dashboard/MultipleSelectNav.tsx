import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Props{

}

const SelectMultipleNav: React.FC<Props> = ({ }) => {

    const [toggleOptions, setToggleOptions] = useState(false);
    const [tokenRemove, setTokenRemove] = useState(false);
    const router = useRouter();

    const toggleOptionsNav = () => {
        setToggleOptions(!toggleOptions);
    }

    const closeSesion = () => {
        Cookies.remove('token');
        setTokenRemove(true);
    }

    useEffect(() => {
        if(tokenRemove){
            router.push('/auth');
        }

    }, [tokenRemove]);

  return (
    <li className="relative">
        <Image className="rounded-full cursor-pointer" src="/profile-picture-4.jpg" alt="User dropdown" width="40" height="40" onClick={toggleOptionsNav}/>
        <div className={`absolute top-[50px] right-0 z-10 divide-y divide-gray-100 rounded-lg shadow w-200 bg-cyan-400 ${ toggleOptions ? 'block' : 'hidden'}`}>
            <div className="px-4 py-3 text-sm text-white">
                <div className="truncate">Edwin Santiago Briceno Uribe</div>
                <div className="font-medium truncate" title="esanti1020@gmail.com">esanti1020@gmail.com</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 text-gray-200" aria-labelledby="avatarButton">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-[#1da9cf] text-gray-200 hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-[#1da9cf] text-gray-200 hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-[#1da9cf] text-gray-200 hover:text-white">Earnings</a>
                </li>
            </ul>
            <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-[#1da9cf]  text-gray-200 hover:text-white" onClick={ closeSesion }>Cerrar Sesion</Link>
            </div>
        </div>
    </li>
  )
}

export default SelectMultipleNav;
