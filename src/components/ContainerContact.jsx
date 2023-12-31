import { useState } from "react"
import ContainerSocialLinks from "./ContainerSocialLinks"

const ContainerContact = () => {
    const [isClickContact, setIsClickContact] = useState("hidden")
    const handleContact = () => {isClickContact === "hidden" ? setIsClickContact("block") : setIsClickContact("hidden")}     
    return (
        <>
            <section className="min-h-screen grid place-items-center p-5 mt-16">
                <div id="ContainerContact" className=" max-w-[400px]  h-max  flex flex-col justify-center items-center gap-6 py-4 px-2 rounded-2xl bg-[#3e3c3c30] text-white ">
                    <span className="text-3xl sm:text-5xl font-bold pt-4">¡Contactame!</span>
                    <p className="text-center px-2">Si mi trabajo es de tu interés no dudes en contactarme!</p>
                    <ContainerSocialLinks/>
                {
                    isClickContact==="hidden"?
                    <button type="button" onClick={handleContact} className=" block cursor-pointer w-max px-5 py-2 border-2 text-sm  font-normal rounded-lg z-10 hover:text-[#5221E6]   transition-all ">Click Aquí</button>
                    :<button type="button" onClick={handleContact} className=" hidden cursor-pointer w-max px-5 py-2 border-2 text-sm  font-normal rounded-lg z-10 hover:text-[#5221E6]   transition-all ">Click Aquí</button>
                    
                }
                    <div className={`${isClickContact} z-10 flex justify-center items-center w-full  px-2 rounded-md`}>
                        <form action="https://formsubmit.co/d5df65faaf2e225575b6c032811801d2" method="POST" className=" flex flex-col justify-center items-center gap-4 w-full h-full text-slate-400">
                                <input type="text" className="w-full outline-none rounded-sm bg-transparent border-b-[1px] p-2  " placeholder="Nombre" name="nombre" />
                                <input type="email" className="w-full outline-none rounded-sm bg-transparent border-b-[1px] p-2 " placeholder="Email" name="email"/>
                                <input type="text" className="w-full outline-none rounded-sm bg-transparent border-b-[1px] p-2" placeholder="Asunto" name="asunto" />
                                <textarea id="" cols="30" rows="7" className="w-full border outline-none rounded-sm bg-transparent border-b-[1px] p-2" placeholder="Mensaje" name="mensaje"></textarea>
                                <div className=" w-full flex justify-evenly gap-2">
                                    <button type="submit" className="flex-1 cursor-pointer w-max px-8 py-2 my-3 border-2 text-sm font-normal rounded-lg z-10 hover:text-black hover:bg-slate-500  transition-all ">Enviar</button>
                                    <button type="reset" onClick={handleContact} className="flex-1 cursor-pointer w-max px-8 py-2 my-3 border-2 text-sm font-normal rounded-lg z-10 hover:text-black hover:bg-[#5221E6]  transition-all ">Cancelar</button>
                                </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContainerContact