"use client"; // Mark as a Client Component

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [footerVisible, setFooterVisible] = useState(true);

    return (
        <>
            <Navbar setFooterVisible={setFooterVisible} /> {/* Pass setter to Navbar */}
            <main className="pt-32 px-4 md:px-12 lg:px-48">{children}</main>
            {footerVisible && <Footer />} {/* Conditionally render Footer */}
        </>
    );
}