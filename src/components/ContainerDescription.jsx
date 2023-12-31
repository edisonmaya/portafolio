//className="max-w-[80vh] mt-28 px-8 sm:min-h-screen sm:p-14 sm:mt-0 md:mt-40 lg:max-w-[85vh] xl:mt-80 xl:text-5xl flex flex-col gap-5 sm:gap-10 justify-start text-white font-Sen font-bold text-3xl  break-words"
//md:text-4xl xl:text-5xl
const ContainerDescription = () => {
    return (
        <article id="PersonalDescription" className="max-w-[70vh] h-[100vh] md:max-w-[85vh] p-8 mt-16 flex flex-col gap-10 justify-center text-white font-Sen font-bold break-words">
            <h2 className="text-2xl Mobile:text-3xl sm:text-3xl "><span className="text-[#9BA4ED] ">Hola! </span> Soy un Desarrollador<p>Web FullStack.</p></h2>
            <p className=" font-normal text-justify text-xs Mobile:text-sm md:text-md lg:text-lg xl:text-xl  ">Probablemente soy el desarrollador más apasionado con el que jamás trabajarás. Si tienes un gran proyecto que necesita algunas habilidades increíbles, soy la persona que buscas!</p>
            <button className="hidden w-max px-5 py-10 border-2 text-sm  font-normal rounded-lg xl:text-xl">Click here</button>
        </article>
    )
}
export default ContainerDescription