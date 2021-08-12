import { useState, useEffect } from 'react'


const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Breakpoint for mobile view
    const breakPoint = 768;

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowWidth >= breakPoint ? false : true;
}
 
export default useWindowWidth;