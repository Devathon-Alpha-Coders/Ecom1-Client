import useAuth from './useAuth'
import axios from '../api/axios';

const useLogout = () => {

    const {setUser} = useAuth();

    const logout = async () => {

        setUser({});
        localStorage.removeItem(`persistant`);
        try{

            const {data} = await axios.get(`/auth/logout`,{
                withCredentials:true
            })

        }catch(err){
            console.error(err)

        }
        
    }
  return logout;
}

export default useLogout