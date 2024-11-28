import React from 'react'
// import Button from './Button'
import Image from 'next/image'
import heroimg from '../public/fdoc/miphome.jpg'
import Button from './Button'
 
// const buttonStyle:React.CSSProperties={
//   color:'var(--secColor)',
// }

const Hero = () => {
const htxt:React.CSSProperties={
  fontSize:'3em',
  fontWeight:'bolder',
  backgroundColor:'rgba(227,227,227,.2)',
  backdropFilter:'blur(3px)',

}

  return (
    <div className='relative'>
        <div className="herolg hero flex flex-col
          h-[55vh]  md:hidden text-white  justify-center
           items-center
          bg-pryColor">
          <p className=' relative top-12
            w-5/6 text-center -translate-y-8
            text-xl herop'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic totam soluta quas animi incidunt architecto quam, quaerat repellendus dolorum laudantium, sequi praesentium ratione possimus harum expedita molestiae doloremque non recusandae!
          </p>
        
        <div className="buttons absolute
  -bottom-5
          flex gap-8">
        <Button c='secColor' val='BOOK A CONSULTATION' color='pryColor' />
        <Button c='pryColor' val='BOOK A CLASS' color='secColor' />
        </div>

        </div>

    <div className="hero 
      hidden md:flex  
      h-[55vh] justify-end items-center">

      <div className="txt flex flex-col">
<h2 style={htxt}>EMPOWERING BIRTH</h2>
<h2 style={htxt}>NURTURING BOND</h2>

<div className="buttons flex justify-between ">
  
<Button c='pryColor' color='secColor' val='Register for a Session' />
        <Button c='secColor' color='pryColor' val='Consult' />
</div>
      </div>

      <div className="img 
        w-2/3 h-full overflow-hidden
        ">
        <Image src={heroimg}
          width={2352}
          height={1763}
          alt=''
        />
      </div>

    </div>
        
    </div>
  )
}

export default Hero