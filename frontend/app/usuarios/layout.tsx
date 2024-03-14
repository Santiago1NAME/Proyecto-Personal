"use client";

import React, { useState } from 'react';
import '../RootLayout.css';
import OptionsMenu from './OptionsMenu';
import Navbar from '../Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import useCookieExists from '@/hooks/useAuth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const token = useCookieExists();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarWidth = isSidebarOpen ? '300px' : '82px';
    const mainWidth = isSidebarOpen ? 'calc(100% - 300px)' : 'calc(100% - 82px)';

    if(!token){
        return null;
    }

    return (
        <div>
            <header className="px-4 bg-cyan-300 shadow-lg border-solid border-b-2 border-[#eceff1] h-[60px]">
                <Navbar isSidebarOpen={ isSidebarOpen } setIsSidebarOpen={ setIsSidebarOpen }></Navbar>
            </header>
            <div className="flex">
                <aside
                    className={
                        `${isSidebarOpen ? 'hidden sm:block' : 'block'}
                         bg-slate-100 md:h-screen-without-header`
                    } style={{ width: sidebarWidth }}
                >
                    <OptionsMenu isSidebarOpen={isSidebarOpen}></OptionsMenu>
                </aside>
                <main className={`md:h-screen-without-header overflow-auto`} style={{ width: mainWidth }}>
                    <Breadcrumb></Breadcrumb>
                    <div className="m-4 py-3">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
