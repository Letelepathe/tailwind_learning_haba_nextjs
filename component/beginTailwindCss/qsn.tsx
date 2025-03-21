import Image from "next/image";
import React from "react";


export default function QSN  () {
   
  return(
    <React.Fragment>
        <section className="">
            <div className="text-center mt-5">
                
                <div className="columns-2 max-md:columns-1 max-sm:columns-1  lg:pl-20 lg:pr-20  sm:pl-10 sm:pr-10" >
                    <div className="  rounded-lg text-left px-6 py-8  shadow-xl  m-3">
                            {/* <p className="rounded-full shadow-rose-500 bg-rose-700 w-10 h-10 text-left pl-1.5 pt-1.5 "><IoCalendar size={25} /></p> */}
                            <h2 className="text-gray-900 dark:text-white mt-5 text-5xl font-bold trancking-tight">Un service de qualité {"        "} <span>rien que pour vous</span> </h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-10 mb-7 text-xl text-justify  ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere hic nobis explicabo esse provident odio quo quibusdam nulla ut, unde obcaecati iure. Omnis animi vero dolorum eligendi ex ratione!
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere hic nobis explicabo esse provident odio quo quibusdam nulla ut, unde obcaecati iure. Omnis animi vero dolorum eligendi ex ratione!
                                </p>
                              
                            {/* <Link href="#" className="outline-2 outline-white pt-3 pl-10 pr-10 pb-3 text-white  mt-5 rounded-full bg-transparent hover:border-transparent hover:bg-rose-600 duration-200 transition ease-linear hover:outline-0">Lire plus</Link> */}
                        </div> 
                        <div className="  rounded-lg text-left px-6 py-8  shadow-xl  m-3">
                    <Image
                    width={1200}
                    height={300}
                    alt="lamba lia "
                    src={'/images/banner/banner2.jpg'}
                    className="rounded w-500"
                    
                    />     
                    </div> 
                        
                </div>
                
                <div className="columns-2 max-md:columns-1 max-sm:columns-1  lg:pl-20 lg:pr-20  sm:pl-10 sm:pr-10" >
                  
                        <div className="  rounded-lg text-left px-6 py-8  shadow-xl  m-3">
                    <Image
                    width={500}
                    height={100}
                    alt="lamba lia "
                    src={'/images/banner/banner1.jpg'}
                    className="rounded w-300 "
                    
                    />     
                    </div> 
                    <div className="  rounded-lg text-left px-6 py-8  shadow-xl  m-3">
                            {/* <p className="rounded-full shadow-rose-500 bg-rose-700 w-10 h-10 text-left pl-1.5 pt-1.5 "><IoCalendar size={25} /></p> */}
                            <h2 className="text-gray-900 dark:text-white mt-5 text-5xl font-bold trancking-tight">Soin de visage  {"        "} <span>rien que pour vous</span> </h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-10 mb-7 text-xl text-justify  ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere hic nobis explicabo esse provident odio quo quibusdam nulla ut, unde obcaecati iure. Omnis animi vero dolorum eligendi ex ratione!
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere hic nobis explicabo esse provident odio quo quibusdam nulla ut, unde obcaecati iure. Omnis animi vero dolorum eligendi ex ratione!
                                </p>
                              
                            {/* <Link href="#" className="outline-2 outline-white pt-3 pl-10 pr-10 pb-3 text-white  mt-5 rounded-full bg-transparent hover:border-transparent hover:bg-rose-600 duration-200 transition ease-linear hover:outline-0">Lire plus</Link> */}
                        </div> 
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
