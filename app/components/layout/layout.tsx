"use client";

import { useState } from "react";
import SearchTermContext from "@/context/searchTermContext";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </SearchTermContext.Provider>
  );
};

export default Layout;
