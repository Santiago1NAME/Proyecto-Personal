"use client";

import React, { useState } from 'react';
import '../RootLayout.css';
import Navbar from '../Navbar';
import useCookieExists from '@/hooks/useAuth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const token = useCookieExists();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if(!token){
        return null;
    }

    return (
        <div>
            <header className="px-4 bg-cyan-300 shadow-lg border-solid border-b-2 border-[#eceff1] h-[60px]">
                <Navbar isSidebarOpen={ isSidebarOpen } setIsSidebarOpen={ setIsSidebarOpen }></Navbar>
            </header>
            <div className="flex">
                <main className={`h-screen-without-header overflow-auto w-full flex items-center justify-center`}>
                    <div className="will-change-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
