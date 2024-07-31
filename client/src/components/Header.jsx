import React from 'react'
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
    return (
        <header id='header' className="bg-black text-white">
            <div className="flex  justify-between items-center p-4">
                <nav>
                    <div className="cursor-pointer"><IoMdMenu className="size-5" /></div>
                    <ul className="bg-white text-black p-4 absolute top-0 left-0 hidden">
                        <li className="border-b border-black pr-20 py-2 text-xl">Menu</li>
                        <li className="pr-20 py-2 text-xl text-gray-400"><Link rel="stylesheet" href="/">Home</Link></li>
                        <li className="pr-20 py-2 text-xl text-gray-400"><Link rel="stylesheet" href="/sign-in">SignIn</Link></li>
                        <li className="pr-20 py-2 text-xl text-gray-400"><Link rel="stylesheet" href="/sign-up">SignUp</Link></li>
                    </ul>
                </nav>
                <h1 className="text-2xl font-['notosanskr']">
                    <Link href='/'><span className="font-bold">GNLGK</span> Blog</Link>
                </h1>
                <div className="flex">
                    <button >
                        {/* {theme === "light" ? <MdOutlineLightMode className="size-6" /> : <MdOutlineDarkMode className="size-6" />} */}

                    </button>
                    <button className="px-2  ml-1">
                        <FaSearch className="size-5" />
                    </button>
                    {/* <button className="px-2">
                    signin
                </button>
                <button className="px-2">
                    signup
                </button> */}
                    <>
                        <img
                            className="rounded-full w-7 h-7 ml-1"
                        />
                        <div className="absolute flex flex-col p-4 border top-20 right-5 w-60 text-black">
                            <span></span>
                            <span></span>
                            <Link to={'/dashboard?tab=profile'}>Profile</Link>
                            <span>SignOut</span>
                        </div>
                    </>
                    {/* ) : (
                        <Link to={"/sign-in"}>로그인</Link>
                    )} */}
                </div>

            </div>
        </header >
    )
}

export default Header
