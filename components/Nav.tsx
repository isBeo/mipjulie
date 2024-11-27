import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className="navWrapper
        flex flex-col">
       
        <div className='nav
        flex items-center md:hidden
        bg-secColor text-pryColor'>
            
            <div className="searchBar
                w-[60%] mx-auto rounded-md
                flex justify-between items-center
                p-3 text-2xl mt-3 border shadow-sm">
                <input type="search" name="" id=""
                    placeholder='Search on MIP' />
                <FaSearch 
                    size={30} 
                    color='#525d0c'/>
            </div>

            <div className="toggle
                w-[30px] mx-auto
                h-[35px] 
                bg-secColor">
                <span></span>
                <span></span>
                <span></span>
            </div>
        
        </div>

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
    </div>
  )
}

export default Nav