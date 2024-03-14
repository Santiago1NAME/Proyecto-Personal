import Link from 'next/link';
import React from 'react';

function Paginate({ paginate, pageTable, setPageTable }: any) {
  const pagesToShow = 3;
  const currentPage = pageTable;
  const totalPages = paginate.totalPages;

  let startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  if (endPage === totalPages) {
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const backPage = () => {
    if (pageTable > 1) {
      setPageTable(pageTable - 1);
    }
  };

  const nextPage = () => {
    if (pageTable < totalPages) {
      setPageTable(pageTable + 1);
    }
  };

  return (
    <div className="my-4">
      <nav className="flex justify-between items-center w-full">
        <span className="text-sm">
          Mostrando pagina <span className="font-semibold text-gray-900">{paginate.currentPage}</span> de{' '}
          <span className="font-semibold text-gray-900">{paginate.totalPages}</span>
        </span>
        <ul className="flex">
          <li>
            <Link href='' className="flex items-center px-3 border text-colorc2 border-colorborder hover:bg-cyan-500 hover:text-white h-8 rounded-l-lg" onClick={backPage}>Anterior</Link>
          </li>
          {visiblePages.map((pageNumber) => (
            <li key={pageNumber}>
              <Link href="" className={pageNumber === currentPage ? "flex items-center px-3 border bg-cyan-500 text-white border-colorborde h-8 disabled cursor-not-allowed" : "flex items-center px-3 border text-colorc2 border-colorborder h-8 disabled cursor-not-allowed"}>{pageNumber}</Link>
            </li>
          ))}
          <li>
            <Link href='' className="flex items-center px-3 border text-colorc2 border-colorborder hover:bg-cyan-500 hover:text-white h-8 rounded-r-lg" onClick={nextPage}>Siguiente</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginate;