import React from 'react'
import InputSearch from '../form/InputSearch';

function TopTable({ setCantItems }: any) {

    const changeCantItems = (event: any) => {
        const nuevaOpcion = event.target.value;
        setCantItems(nuevaOpcion);
    };

  return (
    <div className="flex items-center mb-2 justify-between">
        <div className="flex items-center">
          <p className="mr-2">N. registros</p>
          <select onChange={ changeCantItems } name="" id="" className='block w-[65px] border-solid border-2 border-[#f2f2f2] rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-cyan-300 peer'>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
          </select>
        </div>
        <InputSearch title="Buscar" name="buscar" type="text"/>
    </div>
  )
}

export default TopTable
