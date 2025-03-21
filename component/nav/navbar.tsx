"use client"
import { IoClose, IoMenu } from "react-icons/io5";
import { Links } from "../../types/links";
import { useRef, useState } from "react";

export default function Navbar  ({links}:{links:Links[]})  {
    const [menu,setMenu]=useState(false)
   
    const togglebtn = (e:any) => {
      e.preventDefault();
      const navlinks:any=document.querySelector('.navbar-links')
      navlinks.classList.toggle('md:top-[100%]')
      menu===true?setMenu(false):setMenu(true)
      
    }
    const CompMenu = (menu:boolean) => {
    return   menu===true?
    <IoMenu size={32}  />
      :
      <IoClose size={32}  />
    }
    
    
  return(
    <header>
        <nav className="fixed w-full flex justify-around items-center px-3 pt-4 ">
            <div className="flex items-center justify-items-end">
                <img className="rounded-full w-16 " src="/images/asides/logo.jpeg" alt="logo" />
                <p className="font-bold text-3xl pl-1 ">Lamba<br />
                    <span className="font-regular text-[20px]">Lia</span>
                    
                </p>
            </div>
            <div className={`absolute navbar-links md:static top-16 left-0 w-full md:w-auto bg-gradient-to-tl from-rose-500 to-gray-700 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 
          ${menu ? "translate-y-0 opacity-100 fixed z-50 top-[0px] duration-300 transition ease-linear" : "-translate-y-full opacity-0"} md:flex md:items-center   `}>
          <ul className="flex flex-col md:flex-row items-center gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-500 transition duration-300 capitalize">
                  {link.titre}
                </a>
              </li>
            ))}
          </ul>
        </div>
            <button  className= " z-50  text-black dark:text-white  lg:hidden"
                onClick={togglebtn}>
            {CompMenu(!menu)}
            </button>
        </nav>
    </header>
  )
}
