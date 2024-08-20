import {useState,useEffect} from 'react';

const useWindowSize = () => {
    const [windowSize,setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth: 0,
        height: typeof window !== 'undefined' ? window.innerWidth: 0
    })


    useEffect(()=>{

        handleResize()
        window.addEventListener(`resize`,handleResize)

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        return () => window.removeEventListener(`resize`,handleResize);

    },[])




    return [windowSize]
}


export default useWindowSize;