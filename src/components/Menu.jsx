import { useState } from "react"
import {Link} from "react-scroll"

const Menu = () => {
    const [isClickMenu, setIsClickMenu] = useState("translate-x-52");
    const handleMenu= ()=> isClickMenu==="translate-x-52"? setIsClickMenu("translate-x-0") : setIsClickMenu("translate-x-52");
return (
    <section className="fixed w-full h-1">
    <article className=" flex justify-end items-end top-10 relative " >
        <button className="  w-48 flex flex-row-reverse pr-4 gap-2 cursor-pointer z-10" onClick={handleMenu}>
        <nav className={` md:max-w-[550px] lg:max-w-[650px] hidden text-white md:block absolute inset-0 mx-auto text-sm `}>
                <ul className=" w-full h-full flex gap-2 justify-center items-center ">
                    <li className="grid place-items-center w-full h-full  hover:text-lg  hover:text-[#5221E6]  hover:rounded-md transition-all">
                    <Link  to="Home" spy={true} smooth={true} offset={0} duration={500} >Home </Link></li>
                    <li className="grid place-items-center w-full h-full  hover:text-lg  hover:text-[#5221E6]  hover:rounded-md transition-all">
                    <Link  to="ContainerProjects" spy={true} smooth={true} offset={-50} duration={500} >Projects </Link></li>
                    <li className="grid place-items-center w-full h-full  hover:text-lg  hover:text-[#5221E6]  hover:rounded-md transition-all">
                    <Link  to="PersonalDescription" spy={true} smooth={true} offset={5} duration={500} >About me </Link></li>
                    <li className="grid place-items-center w-full h-full  hover:text-lg  hover:text-[#5221E6]  hover:rounded-md transition-all">
                    <Link  to="ContainerContact" spy={true} smooth={true} offset={50} duration={500} >Contact me </Link></li>
                </ul>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none"     
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="flex justify-end w-7 h-6 text-white  md:invisible hover:text-slate-500  cursor-pointer border border-slate-100/5 rounded-sm">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <nav className={`border w-full h-40 ${isClickMenu} text-white md:hidden text-sm overflow-x-hidden bg-slate-100/5 rounded-md duration-300`}>
                <ul className="w-full h-full flex flex-col gap-2 justify-center items-center ">
                    <li className=" grid place-items-center w-full h-full  hover:text-base hover:text-[#5221E6] transition-all hover:rounded-md">
                    <Link  to="Home" spy={true} smooth={true} offset={0} duration={500} onClick={handleMenu} >Home </Link></li>
                    <li className="grid place-items-center w-full h-full  hover:text-base hover:text-[#5221E6] transition-all hover:rounded-md">
                    <Link  to="ContainerProjects" spy={true} smooth={true} offset={-50} duration={500}onClick={handleMenu} >Projects </Link></li>
                    <li className="grid place-items-center w-full h-full  hover:text-base hover:text-[#5221E6] transition-all hover:rounded-md">
                    <Link  to="PersonalDescription" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenu}>About me </Link></li>
                    <li className="grid place-items-center w-full h-full  hover:text-base hover:text-[#5221E6] transition-all hover:rounded-md">
                    <Link  to="ContainerContact" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenu}>Contact me </Link></li>
                </ul>
            </nav>
        </button>
            
    
</article>  
</section>
)
}
export default Menu