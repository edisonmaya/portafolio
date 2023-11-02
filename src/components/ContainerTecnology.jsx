import {FaReact,FaJava,FaNpm} from 'react-icons/fa';
import {SiRedux,SiVite,SiHtml5,SiCss3,SiDart,SiFlutter,SiSpringboot,SiGithub,SiTailwindcss,SiAxios,SiReacthookform } from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io5'


const ContainerTecnology = () => {
    const medidas = 'w-6 h-6'
  return (
            <>
                <section className="w-full text-slate-400 grid justify-items-center items-center  grid-cols-[repeat(_auto-fit,_minmax(40px,_1fr)_)]  gap-4 bg-[#3e3c3c30] px-2 py-4 rounded-2xl transition-all">
                            
                            <FaReact className={`${medidas} `}/>   
                            <SiRedux className={`${medidas}`}/> 
                            <SiVite className={`${medidas}`}/>   
                            <IoLogoJavascript className={`${medidas}`}/>  
                            <SiHtml5 className={`${medidas}`}/>
                            <SiCss3 className={`${medidas}`}/>
                            <SiTailwindcss className={`${medidas}`}/>
                            <FaJava className={`${medidas}`}/>
                            <SiSpringboot className={`${medidas}`}/>
                            <SiDart className={`${medidas}`}/>
                            <SiFlutter className={`${medidas}`}/>
                            <SiGithub className={`${medidas}`}/>
                            <FaNpm className={`${medidas}`}/>
                            <SiAxios className={`${medidas}`}/>
                            <SiReacthookform className={`${medidas}`}/>
                </section>
            </>
        )
    }
export default ContainerTecnology