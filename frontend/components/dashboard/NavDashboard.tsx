import { IconAdd, IconXPrueba } from '@/public/icons'
import Link from 'next/link'
import React from 'react'

interface Props{
  title: string;
  options: boolean;
}

const NavDashboard: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="flex my-4 justify-between items-center">
        <div>
          <h2 className="text-4xl font-extrabold">{ title }</h2>
        </div>
        { options == true ?
          <button type="button" title="Agregar" className="relative w-7 fill-cyan-300 hover:bg-cyan-300 shadow-md rounded-md hover:fill-white text-sm flex">
            <IconAdd></IconAdd>
          </button>
          :
          <></>
        }
    </div>
  )
}

export default NavDashboard;