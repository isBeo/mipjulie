'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {
    const [open,setOpen]=useState(false)
    const handleOpen =() =>{
       return setOpen(!open)
       console.log(open)
    }
  return (
    <div className="navWrapper
        flex flex-col bg-secColor">
       
        <div className='nav
        flex items-center md:hidden
        bg-secColor text-pryColor'>
            
            <div className="searchBar
                w-[60%] mx-auto rounded-md
                flex justify-between items-center
                p-3 text-2xl mt-3 border shadow-sm">
                <input type="search" name="" id=""
                    placeholder='Search on MIP' 
                    className='w-4/5'/>
                <FaSearch 
                    size={30} 
                    style={{width:'20%'}}
                    color='#525d0c'/>
            </div>

            <button onClick={()=>handleOpen()}
               className="toggle
                w-[30px] mx-auto
                h-[35px] 
                bg-secColor">
                <span></span>
                <span></span>
                <span></span>
            </button>

     
        
        </div>

        <menu className="desktop
                hidden md:flex  justify-center
                text-pryColor text-2xl gap-6 
                p-4 ">
    <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
    </menu>
{
    open?(
        
        <div className="menu
            grid grid-cols-2 justify-center
            items-center  text-3xl font-bold 
            p-[50px]
            ">
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
        </div>
    )
    :''
}
    
    </div>
  )
}

export default Nav