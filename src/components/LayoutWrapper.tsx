"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Navbar.module.css"; // We use standard layout offset

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    // Return admin content without default Navbar/Footer layouts
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "72px" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
