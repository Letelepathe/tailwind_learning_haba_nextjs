import React from "react";
import { IoCalendar, IoChevronForwardCircle } from "react-icons/io5";
import Link from "next/link";
import { ListServices } from "./service";

export default function Services  () {
   
  return(
    <React.Fragment>
        <section className="">
            <div className="text-center">
                <h1 className="text-4xl font-bold p-4">Services</h1>
                
                <div className="lg:grid lg:grid-cols-3 lg:pl-20 lg:pr-20 md:grid grid-cols-2 sm:pl-10 sm:pr-10 sm:grid grid-cols-2" >
                {ListServices.map((service,index)=>(
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg text-left px-6 py-8 ring shadow-xl ring-gray-900/5 m-3">
                        <p className="rounded-full shadow-rose-500 bg-rose-700 w-10 h-10 text-left pl-1.5 pt-1.5 "><IoCalendar size={25} /></p>
                        <h2 className="text-gray-900 dark:text-white mt-5 text-2xl font-bold trancking-tight">{service.titre}</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 mb-7 text-sm  line-clamp-5">
                            {service.description}</p>
                        <Link href="#" className="outline-2 outline-white pt-3 pl-10 pr-10 pb-3 text-white  mt-5 rounded-full bg-transparent hover:border-transparent hover:bg-rose-600 duration-200 transition ease-linear hover:outline-0">Lire plus</Link>
                    </div> 
                ))}
                
                </div>

            </div>
        </section>
    </React.Fragment>
  )
}
