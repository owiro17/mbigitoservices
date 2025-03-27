import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fkex h-screen w-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full"> 


      <Image
        src="/mb.jpg"
        alt="Mbigito Engineering Services Logo"
        width={200}
        height={200}
        className="mb-4"
      />
      <h1 className="text-3xl font-bold text-center text-black">Welcome to Mbigito Engineering Services!</h1>
      <p className="text-black">Coming soon!</p>
      </div>

   
    </div>
  );
}
