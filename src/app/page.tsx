'use client'
import Navbar from "@/components/navbar";
import {BsChevronCompactLeft,BsChevronCompactRight, BsFullscreen} from 'react-icons/bs'
import Image from "next/image"
import { useState } from "react";
import {RxDotFilled} from "react-icons/rx"
import Footer from "@/components/footer";
import Iframe from "react-iframe";
export default function Page(){
  return (
    <div>
    <div className="relative">
      <Image src={"/home.jpg"} height={2000} width={2000} alt="home" className="h-[calc(100vh-64px)] w-screen"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">  
        <h1 className="text-8xl text-white tracking-widest">SAGA</h1>
        <h2 className="text-2xl text-white tracking-wide"> Weaving Sprituality</h2>
      </div>
      <div className="absolute top-3/4 left-1/2  transform  -translate-x-1/2 -translate-y-3/4">
      <button type="button" className=" text-white text-2xl bg-gray-700 hover:bg-gray-900  rounded-md px-8 py-3">Register Now</button>
      </div>
    </div>
    <div className="bg-black h-screen">
      <div>
      <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
            position="absolute"
            width="100%"
            className="h-full"
            height="100%"
            />
      </div>
    </div>
    </div>
  );
}



// const slides = [
//   {url:"https://cdn.pixabay.com/photo/2023/07/12/07/07/cat-8121892_1280.jpg"},
//   {url:"https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_1280.jpg"},
//   {url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}
// ];
// const [currentIndex,setCurrentIndex] = useState(0);
// const prevSlide = () => {
//   const isFirstSlide = currentIndex === 0;
//   const newIndex = isFirstSlide?slides.length - 1: currentIndex -1;
//   setCurrentIndex(newIndex);
// };
// const nextSlide = () => {
//   const isLastSlide = currentIndex === slides.length-1;
//   const newIndex = isLastSlide? 0 : currentIndex+1;
//   setCurrentIndex(newIndex);
// };
// const goToSlide = (slideIndex)=>{
//   setCurrentIndex(slideIndex)
// };

// <>
//     <div className="max-w-[1400px] h-[780px] w-full m-auto  relative group">
//      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover">
//      </div>
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30}/>
//       </div>
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30}/>
//       </div>
//       <div className="flex justify-center py-2 top-4">
//         {
//           slides.map((slide,slideIndex)=>(
//            <div key={slideIndex} 
//            onClick ={()=>goToSlide(slideIndex)}
//            className="text-2xl cursor-pointer"><RxDotFilled /></div>
//           ))}
//       </div>
//      </div>
// </>