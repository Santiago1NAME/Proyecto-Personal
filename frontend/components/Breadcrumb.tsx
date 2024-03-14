import { IconHome, IconRightBread } from '@/public/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Breadcrumb() {
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>([]);
  const router = usePathname();
  const breadCrumb = router.split('/');

  useEffect(() => {
    setBreadcrumbItems([]);
  }, [router]);

  return (
    <nav className="flex m-4 px-5 py-3 text-[#eceff1] border border-[#eceff1] rounded-lg bg-gray-50" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 w-full">
        <li>
          <Link href="/admin" className="inline-flex items-center text-sm font-medium text-black hover:text-cyan-300">
            <IconHome></IconHome>
            <span>Inicio</span>
          </Link>
        </li>
        {breadCrumb.map((bread: string, index: any) => {
          if (bread) {
            breadcrumbItems.push(bread);
            const breadcrumbPath = breadcrumbItems.join('/');
            return (
              <div key={index}>
                <li>
                    <Link href={'/' + breadcrumbPath} className="inline-flex items-center text-sm font-medium text-black hover:text-cyan-500">
                      <IconRightBread></IconRightBread>
                      <span>{bread}</span>
                    </Link>
                </li>
              </div>
            );
          }
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;