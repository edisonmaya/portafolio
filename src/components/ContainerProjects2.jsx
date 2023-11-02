import { FaNpm, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiAxios, SiCss3, SiGithub, SiHtml5, SiRedux, SiTailwindcss, SiVite,SiReacthookform } from 'react-icons/si';
const ContainerProjects2 = () => {
    const medidas = 'w-15 h-15'
    return (
        <>
        <div id="ContainerProjects2" className="text-white gap-4 min-h-screen max-w-4xl xl:max-w-6xl mx-auto p-10 flex flex-row-reverse flex-wrap-reverse justify-evenly mt-10">
            <div className="relative flex items-center justify-center md:max-w-[80vh]">
                <img className=" max-w-[300px] md:max-w-[450px]" src="/MaskGroup.svg" alt="" />
                <div className=" absolute flex flex-col w-[90%]  rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                    <img className=" w-full rounded mx-auto" src="/crud.png" alt="" /> 
                    <div className="flex justify-between items-center transition-all">
                    <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://crudformusers.netlify.app/"  target="_blank" rel="noreferrer" >Visitar Página</a>
                    <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/crudform" target="_blank" rel="noreferrer">Visitar GitHub</a> 
                    </div>
                    <section className="w-full text-slate-400 grid justify-items-center items-center mx-auto grid-cols-[repeat(_auto-fit,_minmax(40px,_1fr)_)] gap-4  bg-[#3e3c3c30] px-2 py-4 rounded-2xl transition-all">
                            <FaReact className={`${medidas}`}/>   
                            <SiRedux className={`${medidas}`}/> 
                            <SiVite className={`${medidas}`}/>   
                            <IoLogoJavascript className={`${medidas}`}/>  
                            <SiHtml5 className={`${medidas}`}/>
                            <SiCss3 className={`${medidas}`}/>
                            <SiTailwindcss className={`${medidas}`}/>
                            <SiGithub className={`${medidas}`}/>
                            <FaNpm className={`${medidas}`}/>
                            <SiAxios className={`${medidas}`}/>
                            <SiReacthookform className={`${medidas}`}/>
                            
                </section>
                </div>
            </div>
            <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-center  text-white font-Sen font-bold text-2xl  break-words">
                <h2><span className="text-[#9BA4ED] ">Crud </span> de Usuarios</h2>
                <p className=" text-xs sm:text-base font-normal text-justify ">Este mini módulo comprende la Inserción, Modificación, Eliminación y Obtención de Datos mediante una API, en esta ultima sección el Software es capaz de mostrarlos en una lista desarrollada con un diseño Intuitivo-Responsivo para cualquier dispositivo Mobile y Desktop.</p>
            </article>
            
        </div>
                <div  className="text-white gap-4 min-h-screen max-w-4xl xl:max-w-6xl mx-auto p-10 flex flex-row flex-wrap-reverse justify-evenly mt-10">
                <div className="relative flex items-center justify-center md:max-w-[80vh]">
                    <img className=" max-w-[300px] md:max-w-[450px]" src="/MaskGroup.svg" alt="" />
                    <div className=" absolute flex flex-col w-[80%]  rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                        <img className=" w-full rounded mx-auto" src="/poke.png" alt="" /> 
                        <div className="flex justify-between items-center transition-all">
                        <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://pokedexfind.netlify.app"  target="_blank" rel="noreferrer" >Visitar Página</a>
                        <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/pokedex" target="_blank" rel="noreferrer">Visitar GitHub</a> 
                        </div>
                        <section className="w-full text-slate-400 grid justify-items-center items-center mx-auto grid-cols-[repeat(_auto-fit,_minmax(40px,_1fr)_)]  gap-4 bg-[#3e3c3c30] px-2 py-4 rounded-2xl transition-all">
                            
                            <FaReact className={`${medidas}`}/>   
                            <SiRedux className={`${medidas}`}/> 
                            <SiVite className={`${medidas}`}/>   
                            <IoLogoJavascript className={`${medidas}`}/>  
                            <SiHtml5 className={`${medidas}`}/>
                            <SiCss3 className={`${medidas}`}/>
                            <SiTailwindcss className={`${medidas}`}/>
                            <SiGithub className={`${medidas}`}/>
                            <FaNpm className={`${medidas}`}/>
                            <SiAxios className={`${medidas}`}/>
                </section>
                    </div>
                </div>
                <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-center  text-white font-Sen font-bold text-2xl  break-words">
                    <h2><span className="text-[#9BA4ED] ">Buscar </span> tu Pokemón</h2>
                    <p className=" text-xs sm:text-base font-normal text-justify ">Este Software simula la Pokedex usada para obtener Datos de un Pokemon para el despliegue de la información se realiza un filtrado consumido desde la API de Pokemos, el Software es capaz de mostrarlos en una grilla de elementos desarrollada con un diseño Intuitivo-Responsivo para cualquier dispositivo Mobile y Desktop.</p>
                </article>
                
            </div>
            <div  className="text-white gap-4 min-h-screen max-w-4xl xl:max-w-6xl mx-auto p-10 flex flex-row-reverse flex-wrap-reverse justify-evenly mt-10">
            <div className="relative flex items-center justify-center md:max-w-[80vh]">
                <img className=" max-w-[300px] md:max-w-[450px]" src="/MaskGroup.svg" alt="" />
                <div className=" absolute flex flex-col w-[90%]  rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                    <img className=" w-full rounded mx-auto" src="/ecommers.png" alt="" /> 
                    <div className="flex justify-between items-center transition-all">
                    <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://ecommeredisonmaya.netlify.app"  target="_blank" rel="noreferrer" >Visitar Página</a>
                    <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/ecommerce" target="_blank" rel="noreferrer">Visitar GitHub</a> 
                    </div>
                    <section className="w-full text-slate-400 grid justify-items-center items-center mx-auto grid-cols-[repeat(_auto-fit,_minmax(40px,_1fr)_)]  gap-4 bg-[#3e3c3c30] px-2 py-4 rounded-2xl transition-all">
                            <IoLogoJavascript className={`${medidas}`}/>  
                            <SiHtml5 className={`${medidas}`}/>
                            <SiCss3 className={`${medidas}`}/>
                            <SiGithub className={`${medidas}`}/>
                            <SiAxios className={`${medidas}`}/>
                            <FaNpm className={`${medidas}`}/>
                </section>
                </div>
            </div>
            <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-center  text-white font-Sen font-bold text-2xl  break-words">
                <h2><span className="text-[#9BA4ED] ">Ecommerce </span> Web</h2>
                <p className=" text-xs sm:text-base font-normal text-justify ">Este mini módulo simula un Ecommerce Online obteniendo información desde la API aumentando ó disminuyendo tanto la cantidad, como el valor en productos seleccionados en el carrito de compras el Software es capaz de mostrar y filtrar los productos en una lista desarrollada con un diseño Intuitivo-Responsivo para cualquier dispositivo Mobile y Desktop.</p>
            </article>
            
        </div>
        <div  className="text-white gap-4 min-h-screen max-w-4xl xl:max-w-6xl mx-auto p-10 flex flex-row-reverse flex-wrap-reverse justify-evenly mt-10">
            <div className="relative flex items-center justify-center md:max-w-[80vh]">
                <img className=" max-w-[300px] md:max-w-[450px]" src="/MaskGroup.svg" alt="" />
                <div className=" absolute flex flex-col w-[90%]  rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                    <img className=" w-full rounded mx-auto" src="/morty.png" alt="" /> 
                    <div className="flex justify-between items-center transition-all">
                    <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://rickandmortywp.netlify.app"  target="_blank" rel="noreferrer" >Visitar Página</a>
                    <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/rickandmorty" target="_blank" rel="noreferrer">Visitar GitHub</a> 
                    </div>
                <section className="w-full text-slate-400 grid justify-items-center items-center mx-auto grid-cols-[repeat(_auto-fit,_minmax(40px,_1fr)_)]  gap-4 bg-[#3e3c3c30] px-2 py-4 rounded-2xl transition-all">
                            <FaReact className={`${medidas}`}/>   
                            <SiVite className={`${medidas}`}/>   
                            <IoLogoJavascript className={`${medidas}`}/>  
                            <SiHtml5 className={`${medidas}`}/>
                            <SiCss3 className={`${medidas}`}/>
                            <SiTailwindcss className={`${medidas}`}/>
                            <SiGithub className={`${medidas}`}/>
                            <SiAxios className={`${medidas}`}/>
                            <FaNpm className={`${medidas}`}/>
                </section>
                </div>
            </div>
            <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-center  text-white font-Sen font-bold text-2xl  break-words">
                <h2><span className="text-[#9BA4ED] ">Universo </span> Rick and Morty</h2>
                <p className=" text-xs sm:text-base font-normal text-justify ">Esta aplicación tiene la facilidad de búsqueda seres de otros mundos en el universo de Rick and Morty agrupándolos por localidades y mostrando información de gran utilidad, obteniendo la información desde la API el Software es capaz de mostrar los personajes con una grilla y adicionalmente muestra una paginación en caso de existir una gran cantidad de personajes con un diseño Intuitivo-Responsivo para cualquier dispositivo Mobile y Desktop.</p>
            </article>
            
        </div>
            </>
    )
}
export default ContainerProjects2