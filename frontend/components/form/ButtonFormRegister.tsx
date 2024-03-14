import React from 'react'

interface Props {
    title: string;
    register: boolean;
    setRegister: (value: boolean) => void;
}

const ButtonFormRegister: React.FC<Props> = ({ title, register, setRegister }) => {

  const handleClick = () => {
    setRegister(!register)
  }

  return (
      <button
        className="bg-white border-solid border-2 border-[#f2f2f2] rounded-md p-2 text-black w-[100%] shadow-md hover:bg-grayhc hover:text-black"
        onClick={handleClick}
      >{ title }</button>
  )
}

export default ButtonFormRegister;