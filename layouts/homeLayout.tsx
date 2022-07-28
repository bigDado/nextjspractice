import React from "react";
import Navigation from "../components/navigation";

export default function HomeLayout({ children }: { children?: React.ReactNode}) {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}