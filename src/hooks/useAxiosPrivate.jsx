import {useEffect} from 'react'
import { axiosPrivate } from '../api/axios'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const useAxiosPrivate = () => {

    const refresh = useRefreshToken();
    const {user} = useAuth();

    useEffect(()=>{

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers[`Authorization`]){
                    config.headers[`Authorization`] = `Bearer ${user.accessToken}`;
                }
            },
            error => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async(error)=>{
                currentRequest = error?.config;
                if(error?.response?.status === 403 && !currentRequest.send){
                    currentRequest.send = true;
                    const newAccessToken = await refresh();
                    currentRequest.headers[`Authorization`] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(currentRequest);
                }
                return Promise.reject(error) 
            }
        )

        return ()=>{
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }



    },[user,refresh])


  return axiosPrivate
}

export default useAxiosPrivate;