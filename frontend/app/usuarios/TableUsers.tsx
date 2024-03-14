"use client";

import React, { useEffect, useState } from 'react';
import Paginate from '@/components/table/Paginate';
import Head from '@/components/table/Head';
import Body from '@/components/table/Body';
import requestApiGet from '@/services/requestApiGet';
import { IconEdit, IconTrash } from '../../public/icons';
import TopTable from '@/components/table/TopTable';
import Cookies from 'js-cookie';

function TableUsers() {
    const [pageTable, setPageTable] = useState(1);
    const [cantItems, setCantItems] = useState(5);
    const [menuA, setMenuA] = useState([]);
    const [pagination, setPagination] = useState([]);

    const getMenuItems = async () =>{
      const token = Cookies.get('token');
      const response = await requestApiGet(`http://localhost:3002/home/user?page=${pageTable}&limit=${cantItems}`, { cache: 'no-store', token});
      return response.data;
    }

    useEffect(() => {
        const fetchMenuItems = async () => {
            const menuItems = await getMenuItems();
              setMenuA(menuItems.users);
              setPagination(menuItems.pagination);
          };
          fetchMenuItems();
    }, [pageTable, cantItems]);

  return (
    <>
        <TopTable setCantItems={ setCantItems }/>
        <table className="w-full text-sm text-left text-gray-500 shadow-md">
            <thead className="text-xs text-white uppercase bg-cyan-500">
                <tr>
                    <Head title="Nombre"/>
                    <Head title="Correo electronico"/>
                    <Head title="Descripcion"/>
                    <Head />
                </tr>
            </thead>
            <tbody>
                { menuA?.map((user: any, index: any) => {
                    return (
                    <tr key={user._id} className="border-b border-colorborder">
                        <Body value={user.name}/>
                        <Body value={user.email}/>
                        <Body value={user.description}/>
                        <td className="px-6 py-4 text-right flex justify-around">
                            <button className="w-7 bg-blue-700 p-1 fill-white rounded-md hover:bg-blue-800" title="Editar">
                                <IconEdit></IconEdit>
                            </button>
                            <button className="w-7 bg-red-700 p-1 fill-white rounded-md hover:bg-red-800" title="Eliminar">
                                <IconTrash></IconTrash>
                            </button>
                        </td>
                    </tr>
                    )
                }) }
            </tbody>
        </table>
        <Paginate paginate={ pagination } pageTable={pageTable} setPageTable={setPageTable}></Paginate>
    </>
  )
}

export default TableUsers
