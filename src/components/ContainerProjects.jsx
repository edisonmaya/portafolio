const ContainerProjects = () => {
    return (
        <div id="ContainerProjects" className="text-white min-h-screen max-w-4xl xl:max-w-6xl mx-auto p-10 flex flex-wrap-reverse justify-evenly mt-10">
            <div className="flex items-center justify-center md:max-w-[80vh] ">
                <img className="max-w-[300px] md:max-w-[400px]" src="/MaskGroup.svg" alt="" />
            </div>
            <article className="  p-5 min-w-[300px] md:text-3xl xl:text-5xl flex flex-col flex-1 gap-5 justify-center items-center  text-white font-Sen font-bold text-2xl  break-words">
                <h2><span className="text-[#9BA4ED] ">Last landing </span> and website projects</h2>
                <p className=" text-xs sm:text-base font-normal text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum</p>
            </article>
        </div>
    )
}
export default ContainerProjects