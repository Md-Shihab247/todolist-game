import React from 'react'
import { FaHome } from 'react-icons/fa'
import { GiQueenCrown } from 'react-icons/gi'
import { IoIosListBox } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <header className=' w-full flex items-center justify-center absolute top-0 left-0 bg-[#0c192c] py-6'>
            <ul className="flex text-white text-sm uppercase font-semibold gap-4">
                <li >
                    <Link className="py-2 inline-block cursor-pointer px-4 rounded-[5px] transition-all group hover:bg-[#3f4042]" to='/'>
                    <FaHome  className="h-[20px] w-[20px] group-hover:text-violet-700 transition-all group-hover:text-shadow-[0_0_10px_#7c3aed]"/>
                    </Link>
                </li>
               
                <li >
                    <Link className="py-2 inline-block cursor-pointer px-4 rounded-[5px] transition-all group hover:bg-[#3f4042]" to='todol-list'>
                    <IoIosListBox  className="h-[20px] w-[20px] group-hover:text-violet-700 transition-all group-hover:text-shadow-[0_0_10px_#7c3aed]"/>
                    </Link>
                </li>
               
                <li >
                    <Link className="py-2 inline-block cursor-pointer px-4 rounded-[5px] transition-all group hover:bg-[#3f4042]" to='number-guess-game'>
                    <GiQueenCrown  className="h-[20px] w-[20px] group-hover:text-violet-700 transition-all group-hover:text-shadow-[0_0_10px_#7c3aed]"/>
                    </Link>
                </li>
               
            </ul>
        </header>
    </>
  )
}

export default Header