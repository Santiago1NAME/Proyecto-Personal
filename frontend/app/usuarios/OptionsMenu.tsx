import React, { useEffect, useState } from 'react';
import SelectMultiple from '@/components/dashboard/SelectMultiple';
import dynamic from 'next/dynamic';
import requestApiGet from '@/services/requestApiGet';


interface Props{
    isSidebarOpen: boolean;
}

const OptionsMenu = ({ isSidebarOpen }: Props) =>{
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
    <div>
        {menuA.map(function(menu: any, index: any) {
            const IconComponent = dynamic(() => import(`@/public/Icons/${menu.icon}.tsx`), { ssr: false });
            return(
                <SelectMultiple key={index} menu={menu} icon={<IconComponent />} isSidebarOpen={isSidebarOpen}></SelectMultiple>
            )
        })}
    </div>
  )
}
export default OptionsMenu;