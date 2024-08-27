// import { SessionProvider } from "next-auth/react";
// import type { AppProps } from "next/app";
'use client'
import React from "react";
import NavBar from "@/components/navBar";
import Search from "@/components/search";
import Card from "@/components/card";
import Footer from "@/components/footer";
const App = ()=>{
  return (
    <>
     <Search/>
     <Card/>
    </>
     
  );

}

export default App;
