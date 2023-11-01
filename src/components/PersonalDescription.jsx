//className="max-w-[80vh] mt-28 px-8 sm:min-h-screen sm:p-14 sm:mt-0 md:mt-40 lg:max-w-[85vh] xl:mt-80 xl:text-5xl flex flex-col gap-5 sm:gap-10 justify-start text-white font-Sen font-bold text-3xl  break-words"
//md:text-4xl xl:text-5xl
const PersonalDescription = () => {
    return (
        <article id="PersonalDescription" className="max-w-[70vh] h-[100vh] Mobile:h-[90vh] Mobile:mt-8 lg:max-w-[85vh] p-8  flex flex-col gap-10 justify-end Mobile:justify-end 2xl:justify-center text-white font-Sen font-bold break-words">
            <h2 className="text-2xl Mobile:text-3xl sm:text-4xl xl:text-5xl"><span className="text-[#9BA4ED] ">Hi! </span> I´m a FullStack<p>Web Developed.</p></h2>
            <p className=" font-normal text-justify text-xs Mobile:text-sm md:text-md lg:text-lg xl:text-xl  ">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
            <button className="invisible w-max px-5 py-2 border-2 text-sm  font-normal rounded-lg xl:text-xl">Click here</button>
        </article>
    )
}
export default PersonalDescription