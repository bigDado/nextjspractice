import React from "react";

export default function HomeLayout({ children }: { children?: React.ReactNode}) {
    return (
        <div>
            <nav style={{ backgroundColor: 'gray', height: 32, position: 'fixed', width: '100%' }}></nav>
            {children}
        </div>
    )
}