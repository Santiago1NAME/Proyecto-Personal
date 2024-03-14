import React from 'react'

interface Props {
  title: string;
}

const ButtonForm: React.FC<Props> = ({ title }) => {

  return (
      <button type="submit" className="bg-cyan-300 rounded-md p-2 text-white w-[150px] hover:bg-colorhc1">{ title }</button>
  )
}

export default ButtonForm; 