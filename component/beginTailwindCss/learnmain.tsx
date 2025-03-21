import React from "react";
import Navbar from "../nav/navbar";
import { Navbars } from "../nav/navbars";

export default function Learnmain  () {
  return(
    <React.Fragment>
        <section className="">
            <div className="w-full  min-h-[100vh] bg-[url('/images/banner/banner1.jpg')] bg-cover bg-gray-800 bg-gradient-to-tr from-gray-800 to-pink-500">
            <Navbar links={Navbars()} />
              <div className="text-center absolute top-[40%]">
                <h1 className="lg:font-bold lg:text-6xl text-center md:text-4xl md:font-bold max-sm:text-3xl max-sm:font-medium">La beauté de la femme </h1>
                <p className="text-center pt-5 pl-50 pr-50   md:pt-2 md:pl-25 md:pr-25 max-sm:pt-2 max-sm:pl-5 max-sm:pr-5 max-sm:text-[15px] max-sm:font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ratione aspernatur temporibus expedita ea, quia asperiores atque? Necessitatibus harum ex voluptatibus consectetur quos quia, error itaque perspiciatis sapiente laboriosam ratione?</p>
                <button className="mt-4 rounded-full p-4 bg-rose-700 w-[150px] hover:bg-rose-400 duration-500 transition ease-out ">Lire plus</button>
                <button className="ml-10 mt-4 rounded-full p-4 bg-transparent  outline-1 outline-indigo-100 w-[150px] hover:bg-rose-400 ">Lire plus</button>
              </div>
            </div>
        </section>
    </React.Fragment>
  )
}
