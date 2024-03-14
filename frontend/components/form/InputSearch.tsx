import React from 'react'

interface Props {
  title: string;
  name: string;
  type: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: React.FC<Props> = ({ title, name, type, required, onChange }) => {
  return (
    <div className="relative mt-3 mb-3">
        <input
          id={ name }
          name={name}
          className="block w-50 border-solid border-2 border-[#f2f2f2] rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-cyan-300 peer"
          type={ type }
          placeholder=" "
          onChange={onChange}
        />
        <label
          htmlFor={ name }
          className="absolute text-sm duration-300 transform -translate-y-5 bg-white px-2 translate-x-1 scale-75 top-3  z-10 peer-focus:left-0 peer-focus:top-3  peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          { title }
        </label>
    </div>
  )
}

export default InputSearch