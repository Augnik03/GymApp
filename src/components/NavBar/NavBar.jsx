import React, { useState } from 'react'
import dark from '../../assets/moon.png'
import gymLogo from '../../assets/weightlifting.png'
import searchIcon from '../../assets/magnifying-glass.png'
import light from '../../assets/day-mode.png'
import logo from '../../assets/logoNoBg.png'



function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='h-screen w-screen bg-cover bg-gymImg bg-no-repeat'>
            <nav className='min1:flex min1:justify-around min1:items-center backdrop-blur-sm sticky top-0 '>



                <div className='max:flex max:justify-between max:items-center '>
                    <a href="#">
                        <img src={logo} alt="logo" className=' w-28 mx-6 my-4' />
                    </a>
                    <div className="px-4 cursor-pointer max:inline hidden text-neonGreen">

                        <button onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                    </div>
                </div>



                <div className=' max:text-center min1:flex min1:justify-center'>
                    <ul className={`min1:border-2 py-2 px-3 font-bold rounded-full uppercase mx-3 text-white border-gray-500 border-opacity-40 text-sm min1:flex ${isOpen ? 'max:inline-block' : 'max:hidden'} max:text-center max:backdrop-blur-sm max:rounded-none `}>
                        <li className='px-5 py-2 rounded-full hover:bg-neonGreen 
                 hover:text-black '>
                            <a href="#">Home</a>
                        </li>
                        <li className='px-5 py-2 rounded-full hover:bg-neonGreen hover:text-black '>
                            <a href="#">workout</a>
                        </li>
                        <li className='px-5 py-2 rounded-full hover:bg-neonGreen hover:text-black '>
                            <a href="#">product</a>
                        </li>
                        <li className='px-5 py-2 rounded-full hover:bg-neonGreen hover:text-black '>
                            <a href="#">resource</a>
                        </li>
                    </ul>




                    <div className='flex justify-center items-center max:pb-4'>
                        <div className={` px-3 mr-3 rounded-full text-neonGreen max:border-gray-400 min1:border-gray-500 min1:border-opacity-40 items-center flex ${isOpen ? 'block' : 'max:hidden'}  border-2 h-9`}>
                            <input type="text" name="" id="" className='outline-none border-none px-2 bg-transparent' />
                            <img src={searchIcon} alt="img" className='w-4 h-4 cursor-pointer mr-1' />
                        </div>
                    </div>

                </div>

            </nav>
        </div>
    );
}
export default NavBar