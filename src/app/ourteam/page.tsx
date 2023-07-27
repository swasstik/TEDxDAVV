import React from 'react'
import Image from 'next/image'

export default function Page() {
  let user = [
    {src:"/team1.jpg" ,position:"Organiser", name: "Ashutosh Malve"},
    {src:"/team1.jpg" ,position:"Co-organiser", name: "Heartfulness"},

  ];
  let user2 = [
    {src:"/team2.jpg" , name: "Shan Rathod" , position:"Design"},
    {src:"/team2.jpg" , name: "Shan Rathod" , position:"Design"},
    {src:"/team2.jpg" , name: "Shan Rathod" , position:"Design"}
  ];
  return (
    <div className='bg-black'>
      <div className='flex flex-col items-center'>
        <h1 className='text-red-600 font-black text-7xl pt-12'>OUR TEAM</h1>
        <h3 className='text-white pt-6 text-4xl font-bold'>Dedication. Expertise. Passion.</h3>
        <div className='border-b-4 w-80 pt-8'></div>
      </div>
      <div className='flex my-12 mx-auto justify-center gap-6'>
       {
        user.map((item)=>{ 
          return(<div className='flex flex-row p-4 border rounded-md shadow-xl shadow-cyan-500/50'>
          <div>
          <Image src={item.src} width={200} height={200} className='aspect-[1/1] rounded-xl object-cover' alt='oc'/>
          </div>
          <div className='flex flex-col items-center ml-4 py-2 my-auto'>
            <h1 className='text-white text-3xl font-medium border-b-4 border-gray-500'>{item.position}</h1>
            <h2 className='text-white text-xl pt-2 pb-4'>{item.name}</h2>
            <div className="flex space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full p-1 ">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full p-1">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full p-1">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>    
            </div>
          </div>
        </div>)
        })
       }
      </div>
      <div >
        <div className='flex justify-center'>
        <h1 className='text-white pt-12 font-extrabold text-4xl border-b-4 pb-4 border-gray-400'>Heads of Department</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-16 mx-auto'>
        {
          user2.map((index)=>{
            return(
              <div className="flex justify-center">
          <div className='relative w-52 h-52'>
            <Image src={index.src} width={170} height={200} className='aspect-[9/12] object-cover' alt='team' />
            <div className='absolute h-24 w-36 p-2 bg-white -bottom-12 -right-4'> 
              <h1 className='text-xl font-bold text-red-500'>{index.name}</h1>
              <h2 className='text-xl font-bold'>{index.position}</h2>
              <h3>Icons</h3>
            </div>
          </div>
          </div>
            )
          })
        }
          
          
                    
          
        </div>
       
      </div>
      
    </div>
  )
}
