//className=" min-w-[50vh]  flex flex-col justify-center items-center md:flex-row md:flex-wrap md:w-[1100px] gap-4 mx-auto mt-8 lg:mt-20
const ContainerGrid = () => {
    return (
        <>
            <section className="md:w-[90%] min-h-screen grid place-items-center mx-auto">
                <div className=" mx-auto grid place-items-center grid-cols-[repeat(_auto-fill,_minmax(300px,_1fr)_)]  gap-3 px-2 py-4 rounded-2xl bg-[#3e3c3c30] transition-all">
                    <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-center  text-white font-Sen font-bold text-2xl  break-words">
                        <h2><span className="text-[#9BA4ED] ">Crud </span>Users </h2>
                        <p className=" text-xs sm:text-base font-normal text-justify ">Este mini módulo comprende la Inserción, Modificación, Eliminación y Obtención de Datos mediante una API, en esta ultima sección el Software es capaz de mostrarlos en una lista desarrollada con un diseño Intuitivo-Responsivo para cualquier dispositivo Mobile y Desktop.</p>
                    </article>
                    
                    <div className=" rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                        <img className=" rounded-t-md " src="/CrudUsers.png" alt="" />
                        <div className="flex justify-between items-center transition-all">
                            <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://crudformusers.netlify.app/" target="_blank" rel="noreferrer" >Visitar Página</a>
                            <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/crudform" target="_blank" rel="noreferrer">Visitar GitHub</a>
                        </div>
                    </div>
                    <div className="  rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                        <img className="rounded-t-md " src="/Pokedex.png" alt="" />
                        <div className="flex justify-between items-center transition-all">
                            <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://pokedexfind.netlify.app" target="_blank" rel="noreferrer">Visitar Página</a>
                            <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/pokedex" target="_blank" rel="noreferrer">Visitar GitHub</a>
                        </div>
                    </div>
                    <div className=" rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                        <img className=" rounded-t-md " src="/Ecommerce.png" alt="" />
                        <div className="flex justify-between items-center transition-all">
                            <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://ecommeredisonmaya.netlify.app" target="_blank" rel="noreferrer">Visitar Página</a>
                            <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/ecommerce" target="_blank" rel="noreferrer">Visitar GitHub</a>
                        </div>
                    </div>
                    <div className="  rounded-2xl bg-[#3e3c3c30] p-2 break-words text-center text-white md:text-sm lg:text-lg transition-all">
                        <img className="rounded-t-md " src="/FindApiRickandMorty.png" alt="" />
                        <div className="flex justify-between items-center transition-all">
                            <a className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-bl-md text-xs hover:text-[14px] transition-all" href="https://rickandmortywp.netlify.app" target="_blank" rel="noreferrer">Visitar Página</a>
                            <a className="flex-1  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-br-md text-xs  hover:text-[14px] transition-all" href="https://github.com/edisonmaya/rickandmorty" target="_blank" rel="noreferrer">Visitar GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContainerGrid