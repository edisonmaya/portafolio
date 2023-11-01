const ContainerAboutMe = () => {
    return (
        <div id="ContainerAboutMe" className="text-white min-h-screen max-w-4xl xl:max-w-6xl mx-auto p-10 flex flex-wrap-reverse  gap-8 justify-evenly mt-10">
            <div className=" relative flex items-center justify-center md:max-w-[80vh]">
                <div className="w-[270px] h-[270px] mx-auto border rounded-full overflow-hidden ">
                <img className="w-full " src="/Edison.jpeg" alt="" />
                    </div>
            </div>
            <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-start  text-white font-Sen font-bold text-2xl  break-words">
                <h2><span className="text-[#9BA4ED] ">Sobre </span> Mí</h2>
                <p className=" text-xs sm:text-base font-normal text-justify leading-5 ">Soy Desarrolador Web Fullstack estudiante de Academlo me titulé como Tecnólogo en Desarrollo de Software. Soy una persona con sentido de responsabilidad, organización y respeto con ganas de seguir desarrollando nuevas habilidades. Tengo la capacidad de enfrentar nuevos retos y tengo la disposición para trabajar en equipo. </p>
            </article>
        </div>
    )
}
export default ContainerAboutMe