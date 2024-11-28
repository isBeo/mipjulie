import Image from 'next/image'
import React from 'react'
import logo from '../public/logo-192x192.png'
import { FaFacebook, FaInstagram, FaSearch, FaShoppingCart, FaUser, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <div className="wrapper
             flex items-start shadow-md
             relative
             justify-between p-2">

            {/* logo */}
            <div className="logo 
                flex items-center ">
                <Image 
                    src={logo}
                    alt='Midwife Inspired logo'
                    width={192}
                    priority
                    height={192}
                />
                <h1 title='Midwife Inspire Plus'
                    className='
                        text-6xl font-extrabold text-pryColor'>MIP</h1>
            </div>

            <div className="partB 
                flex flex-col items-center justify-around">
                

            <div className="contact
                flex items-center absolute top-2 right-2 gap-4
                ">
                <FaUser 
                    size={30}
                    color='#525d0c'
                />
                <FaShoppingCart 
                    size={30}
                    color='#525d0c'
                />
            </div>

            <div className="search 
                    absolute top-1
                     flex-2 border-2 
                      shadow-md
                     p-3 rounded-md
                     max-w-[600px] 
                     w-2/5 lg:w-3/5 hidden 
                     md:right-[130px] placeholder:text-secColor
                     placeholder:text-5xl
                   md:flex items-center justify-between ">
                
                <input placeholder='search MIP'
                 type="search" name="" id="" />
                <FaSearch
                    size={30}
                    color='#525d0c'
                />
            
            </div>

            <div className="socialMedia 
                absolute bottom-4 right-4 
                flex items-center gap-5  ">
                <FaFacebook
                    size={30}
                    
                    color='blue'
                     />
                <FaInstagram
                    size={30}
                    color='red'
                     />
                <FaWhatsapp
                    size={30}
                    color='green'
                     />
                <FaYoutube
                    size={30}
                    color='red'
                     />
            </div>
            </div>
         
        </div>
    </div>
  )
}

export default Header