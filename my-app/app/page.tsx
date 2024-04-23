import Image from "next/image";
import React from "react";
import Card from "./_components/card";
import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Header />
          <div className="w-full h-96 bg-gradient-to-br from-cyan-100 via-cyan-300 to-cyan-400">
            <div className="items-center flex-col h-96">
              <div className="pt-28">
                <p className=" text-3xl font-black ml-20">Welcome</p>
                <p className=" text-3xl font-black ml-32">My Home Page</p>
              </div>
            </div>
          </div>
          <Card />
      </div>
      <Footer />
      {/* <script src="./node_modules/preline/dist/preline.js"></script> */}
    </div>
  );
}
