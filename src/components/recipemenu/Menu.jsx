import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <ol className=' flex flex-col gap-5 bg-[#0E0303] text-white items-justify p-5 h-[50%] list-decimal'style={{fontFamily:"poppins", fontWeight:400, fontSize:23}}>
        <li><Link to='/Breakfast'>Breakfast</Link></li>
        <li><Link to='/Lunch'>Lunch</Link></li>
        <li><Link to='/Dinner'>Dinner</Link></li>
      </ol>
    </>
  )
}

export default Menu