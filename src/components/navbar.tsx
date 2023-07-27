"use client"
import Link from "next/link";
import React from "react";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';




export default function Navbar()
{
    const currentRoute = usePathname();
    const linkStyle = "text-gray-300 rounded-md px-6 py-4 text-sm font-medium hover:bg-gray-700 hover:text-white  ";
    const activeL = linkStyle + " bg-gray-900";
   const [open,setOpen] = useState(false);
  const click = () => {
    setOpen(true);
}


    return (
       // className= "flex flex-row h-20 py-4 px-2 bg-slate-100"
       <div className="flex bg-gray-800 items-center">
        <div className="flex flex-shrink-0 items-center">
         <img className="h-16 w-auto ml-6" src="/logo-white.png"/>
         </div> 
            <div className="hidden md:ml-auto md:mr-6 md:block ">
                <div className="flex space-x-4">
                  <Link href="/" className={currentRoute==='/'?activeL:linkStyle} aria-current="page">HOME</Link>
                  <Link href="/about" className={currentRoute==='/about'?activeL:linkStyle}>ABOUT</Link>
                  <Link href="/speaker" className={currentRoute==='/speaker'?activeL:linkStyle}>SPEAKERS</Link>
                  <Link href="/ourteam" className={currentRoute==='/ourteam'?activeL:linkStyle}>OUR TEAM</Link>
                </div>
            </div>


            <div className=" rounded-[15px] flex items-center justify-center w-[60px] h-[60px] ml-auto mr-6 md:hidden cursor-pointer" onClick={click}>
                        <Bars3BottomRightIcon className="h-10 w-10 text-white" aria-hidden="true" />
                    </div> 
        
        
                    <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
            
            
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">

                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                       
                        <div className="absolute left-3 top-2 ml-0   flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6 text-sblack" aria-hidden="true" />
                            </button>
                        </div>
                      
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                               <ul className="flex flex-col gap-10 justify-center items-center ">
                               <div className=" mt-20 font-roboto font-500 text-26 leading-80 flex flex-col justify-center items-center text-center">
                                   <Link href='/'   className="cursor-pointer text-sblack">Home</Link>
                                   <Link href='about' className="cursor-pointer text-sblack">About Us</Link>
                                   <Link href=""  onClick={(e) => {e.preventDefault(); setOpen(false)}} className="cursor-pointer text-sblack">Speaker</Link>
                                   <Link href='about' className="cursor-pointer text-sblack">Our Team</Link>
                               </div>
                               </ul>  
                        </div>
                    </Dialog.Panel>
                </div>
                
            </Dialog>
          </Transition.Root>
            </div>
    )
}