import React from 'react'
// import plan from '../public/'
import Image from 'next/image' 

type course={
    title:string;
    imgURL:string
    parag:string;
}

const Courses = () => {
const course :course[] =[
    {
        title:'INTENSIVE HYPNOBIRTHING CLASSES',
        imgURL:'/swimmingmom.jpg',
        parag:'Unlock the power of a calm & positive birth experience through our hypnobirthing techniques that helps you connect with your body at birth & beyound.',
    }
]

  return (
    <div className='my-4 p-2 rounded-md bg-pryColor'>
   {
            course.map(c =>(
                <div key={c.parag} 
                    className='max-w-[300px] mx-auto
                        shadow-md bg-secColor'>
                    <h2 className='text-4xl
                        text-center font-bold 
                        text-pryColor'>{c.title}</h2>
                    <Image src={c.imgURL}
                      width={2849}
                      height={3799} alt='hypno-birthing classes'
                      className='p-4 max-w-[300px]' />
                    <p className='p-4 text-center
                        text-2xl'>{c.parag}</p>
                      
                </div>
            ))
        }
        

         
    </div>
  )
}

export default Courses