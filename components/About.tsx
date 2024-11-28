import React from 'react'
import author from '../public/fdoc/author.jpg'
import Image from 'next/image'
import { FaYoutube,  } from 'react-icons/fa'
import Button from './Button'

const About = () => {
    const bio:string = 'Katie started Nursing Mama with the aim to provide antenatal breastfeeding education to parents in her local area. As a public health nurse and certified lactation consultant, she was seeing many parents experience the same issues when they returned home from hospital. Katie quickly realised if they had better education regarding breastfeeding, understanding how to get started, how to establish a milk supply and have a realistic expectation of breastfeeding, this would have led to a more positive experience. The word of Nursing Mama classes spread, and Katie quickly moved online to reach more parents not only in Ireland but overseas now too.'

    const julie__bio:string = bio.replaceAll('Kate','MIP');
  return (
    <div className='
       '>
     <div className="wra  grid grid-cols-1 md:grid-cols-2
            justify-center relative -z-10">
     <div className="img
            relative ">
            <Image
                className='mx-auto'
                src={author}
                width={500}
                quality={100}
                height={658}
                alt='CEO midwife inspired plus' />
            <div className="youtube flex flex-col text-lg
                absolute  top-20 left-4">
                <FaYoutube className='rotate-12' size={90} color='red'/>
                <h3 className='bg-[red] p-2 text-white text-xl rounded'>Subscribe!</h3>
            </div>
     </div>
            <div className="bio
               justify-center text-justify text-2xl
               mx-auto p-2 md:p-4
            ">
                <h2 title='Midwife Inspired Plus' 
                    className='
                        md:text-3xl text-pryColor
                        text-2xl text-center'>
                        ABOUT MIP
                </h2>
                <p>{julie__bio}
                </p>
 <p>
 The Newborn Care class was then created to support, educate & empower parents in Newborn Care. The Weaning from Breastfeeding Class quickly followed due to the increasing number of clients seeking help to stop Breastfeeding and remains one of the most popular classes to date. Nursing Mama offers in person consults within Kildare and Dublin as well as online Worldwide.</p>
    <div className="buttons flex gap-8 m-4">
        <Button c='pryColor' color='secColor' val='LEARN MORE'  /> 
        <Button c='secColor' color='pryColor' val='SIGN YP TO NEWSLETTER'  /> 
    </div>
            </div>
        </div>
    </div>
  )
}

export default About