import useAuth from './useAuth';
import axios from '../api/axios';

const useRefreshToken = () => {

  const {setUser} = useAuth();

  const refresh =async () => {

    let response = axios.get(`/auth/refresh`,{
      headers:{"Content-Type":"application/json"},
      withCredentials:true
    })

    if(response.data.data.accessToken){
      setUser(prev => {
        // console.log(JSON.stringify(prev));
        // console.log(response.data.data)
        // const {name,roles,accessToken} = response?.data?.data
        return {...prev,...response?.data?.data}
    
    })
      }
  return response?.data?.data?.accessToken;

  }

  return refresh;
}

export default useRefreshToken;