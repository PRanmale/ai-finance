import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="container px-5 mx-auto my-32">
            {children}
        </div>
    );
}
