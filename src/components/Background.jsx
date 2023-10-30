

const Background = ({ children }) => {
    return (
                <main id="Home" className='bg-[#000000] min-h-[400vh] relative overflow-hidden transition-all font-Sen'>
                <img className='absolute left-8 top-8 Mobile:left-12' src="/Group.svg" alt="" />
                <img className='absolute -top-10 -right-10  max-w-[350px]  md:max-w-[800px] md:-top-72 md:-right-72 lg:-top-96 lg:-right-96 lg:max-w-[1050px] transition-all ' src="/Group80Desktop.svg" />
                <img className='absolute left-0' src="/EllipseLeft.svg" />
                <img className='absolute left-3 top-80 max-w-sm' src="/EllipseComplete.svg" />
                <img className='absolute top-[70%] sm:bottom-1/2 -right-60 scale-275 sm:scale-150 sm:-right-64 md:scale-110 md:-right-52 ' src="/EllipseComplete.svg" />
                {children}
                </main>
                
    )
}
export default Background