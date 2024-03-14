"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import requestApiGet from '@/services/requestApiGet';
import Link from 'next/link';


interface Props{
}

const Modulos = ({}: Props) =>{
    const [menuA, setMenuA] = useState([]);

    const getMenuItems = async () =>{
      const response = await requestApiGet('http://localhost:3002/home/menu');
      return response.data;
    }

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
              const menuItems = await getMenuItems();
              setMenuA(menuItems);
            } catch (error) {
              console.error('Error fetching menu items:', error);
            }
          };
          fetchMenuItems();
    }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {menuA.map(function(menu: any, index: any) {
            return(
              <Link key={index} href={ menu.redirect } className="shadow-md rounded-md text-center flex flex-col items-center justify-center p-5 hover:bg-cyan-200">
                <Image className="rounded-full" src="/profile-picture-4.jpg" alt="User dropdown" width="40" height="40"/>
                <h2 className="text-lg font-extrabold pt-5">{menu.menu}</h2>
              </Link>
            )
        })}
    </div>
  )
}
export default Modulos;