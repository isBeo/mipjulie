import React from 'react'

type buttonProps ={
    val:string;
    color:'pryColor'| 'secColor';
    c:'pryColor'| 'secColor';
}

const Button:React.FC<buttonProps> = ({
    val, color , c
}) => {
  return (
    <div className={`bg-${color}
      w-[130px] text-xl text-center 
       rounded-lg p-2 font-bold text-${c}`}>
        {val}
    </div>
  )
}

export default Button