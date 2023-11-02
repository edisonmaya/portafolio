import {SiGithub,SiLinkedin } from 'react-icons/si'


const ContainerSocialLinks = () => {
    const medidas = 'w-12 h-12'
  return (
    
        <section className="w-[70%] text-slate-400 flex justify-evenly items-center  px-2 py-4 rounded-2xl transition-all z-10">
                            
                            <a className="  " href="https://github.com/edisonmaya"  target="_blank" rel="noreferrer" ><SiGithub className={`${medidas} cursor-pointer`}/></a>
                            <a className="  " href="https://www.linkedin.com/in/edison-maya-huayamave-44a555221/"  target="_blank" rel="noreferrer" ><SiLinkedin className={`${medidas} cursor-pointer`}/></a>
                </section>
    
  )
}
export default ContainerSocialLinks