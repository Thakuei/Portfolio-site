import React from "react";
import Header from "./_components/header";
import Image from "next/image";
import rikoriko from "@/app/images/rikoriko.webp";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
        <div className="w-full h-96 bg-gradient-to-br from-cyan-100 via-cyan-300 to-cyan-400">
          <div className="items-center flex-col h-96">
            <div className="pt-28">
              <p className=" text-3xl font-black ml-20">Welcome</p>
              <p className=" text-3xl font-black ml-32">My Home Page</p>
            </div>
          </div>
          {/* <Image src={rikoriko} alt="rikoriko" className="w-full h-96 aspect-square" /> */}
        </div>
        <div>
          <h1 className="text-4xl font-bold">Hello, world!</h1>
          <p className="text-lg">This is a Next.js app with Tailwind CSS.</p>
        </div>
      {/* <script src="./node_modules/preline/dist/preline.js"></script> */}
      <Footer />
    </div>
  );
}
