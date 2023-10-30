//className="max-w-[80vh] mt-28 px-8 sm:min-h-screen sm:p-14 sm:mt-0 md:mt-40 lg:max-w-[85vh] xl:mt-80 xl:text-5xl flex flex-col gap-5 sm:gap-10 justify-start text-white font-Sen font-bold text-3xl  break-words"
const PersonalDescription = () => {
    return (
        <article id="PersonalDescription" className="max-w-[80vh] h-[80vh] md:h-[90vh] lg:max-w-[85vh] px-8  md:text-4xl xl:text-5xl  flex flex-col gap-10  justify-center md:justify-end xl:justify-center  text-white font-Sen font-bold text-2xl  break-words">
            <h2><span className="text-[#9BA4ED]">Hi! </span> I´m a backend developed.</h2>
            <p className=" text-xs sm:text-base  font-normal text-justify md:text-xl  ">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
            <button className="w-max px-5 py-2 border-2 text-sm  font-normal rounded-lg xl:text-xl">Click here</button>
        </article>
    )
}
export default PersonalDescription