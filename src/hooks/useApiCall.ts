import axios from "axios"

export function useApiCall(url: string | undefined, method: string){
    const token = localStorage.getItem("token");
    return axios({
        method,
        url: `${import.meta.env.VITE_API_URL}/${url}`,
        headers: {'authorization': `bearer ${token}`}
    }).then((res)=>res.data)
}