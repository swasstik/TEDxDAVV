'use client'
import React from 'react'
import { useEffect,useState } from 'react'
import Image from 'next/image'

export default function Page() {

  const [bab,setBab] = useState(null);

     useEffect(()=>{
        fetch('http://localhost:1337/api/speakers')
        .then(res=>{
            return res.json()
        })
        .then(data =>{
           setBab(data.data);
        })
     },[]);


  return (
    <div className='my-8 mx-16 sm:mx-28 md:mx-36'>
  <div >
    <div className='border-t-8 w-52 border-red-500'></div>
    <h1 className='text-4xl mt-4 mb-3 font-bold '>Our Speakers</h1>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4  '>
    {

    bab?.map((element:any,index:any) => {
    
    return (<div key={index} className='group relative flex flex-col bg-gray-800 rounded-md my-12 p-4 w-100 mx-auto items-center'>
      <Image alt="speaker1" className='group-hover:scale-50 transition duration-200' src={element.attributes.src} width={200} height={300}/>
      <div className='hidden absolute bottom-0 pb-2 text-white group-hover:block transition duration-500'>
      <h1 className='font-extrabold'>{element.attributes.name}</h1>
      <h3>Motivational Speaker</h3>
      </div>
    </div>)})
  }
    </div>

   
  </div>  
  )
}
