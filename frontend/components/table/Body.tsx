import React from 'react'

interface Props{
    value: string;
}

function Body({ value }: Props) {
  return (
    <th scope="row" className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap ">
        {value}
    </th>
  )
}

export default Body
