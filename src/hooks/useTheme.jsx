 
 const useTheme = () => {

    const [isDarkMode,setDarkMode] = useState(false)

    useEffect(()=>{
        const savedTheme = localStorage.getItem(`theme`) ?? ``
            setDarkMode(savedTheme.toLowerCase() === `dark`);
            document.documentElement.classList.toggle(`dark`,savedTheme.toLowerCase() === `dark`)
    },[])


    const toggleTheme = () => {
        setDarkMode(prev => {
            const newState = !prev;
            localStorage.setItem(`theme`,newState ? `dark`: 'light');
            document.documentElement.classList.toggle(`dark`,newState)
        })
    }

   return [isDarkMode,toggleTheme];
 }
 
 export default useTheme