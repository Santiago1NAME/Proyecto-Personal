import React, { useEffect, useState } from 'react';
import { IconMenuPrin } from '@/public/icons';
import Link from 'next/link';
import SelectMultipleNav from '@/components/dashboard/MultipleSelectNav';

interface Props{
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}

const Navbar: React.FC<Props> = ({ isSidebarOpen, setIsSidebarOpen }) =>{

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <nav className="flex items-center justify-between h-[60px]">
            <div>
                <IconMenuPrin onClick={toggleMenu}></IconMenuPrin>
            </div>
            <ul className="flex items-center gap-2">
                <SelectMultipleNav></SelectMultipleNav>
            </ul>
        </nav>
    )
}

export default Navbar;
