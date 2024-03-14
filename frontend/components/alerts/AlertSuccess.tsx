import React from 'react'
import { IconX } from '@/public/icons';

interface Props {
    text: string;
}

const AlertSuccess: React.FC<Props> = ({ text }) => {
  return (
    <div className="absolute alert-g alert-success bg-[#31c48d29] min-w-[300px] p-5 top-2 right-2 font-bold flex justify-center border-solid">
      <div className="absolute top-1 right-1 cursor-pointer">
        <IconX />
      </div>
      <p className="text-alertsucces">{ text }</p>
    </div>
  )
}

export default AlertSuccess;