import React from 'react'
import { IconX } from '@/public/icons';

interface Props {
    text: string;
}

const AlertError: React.FC<Props> = ({ text }) => {
  return (
    <div className="absolute alert-g alert-error bg-[#ff00002e] min-w-[300px] p-5 top-2 right-2 font-bold flex justify-center border-solid border-alerterror">
      <div className="absolute top-1 right-1 cursor-pointer">
        <IconX />
      </div>
      <p className="text-alerterror">{ text }</p>
    </div>
  )
}

export default AlertError;