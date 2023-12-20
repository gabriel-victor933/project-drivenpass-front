import axios from "axios"
export function useFetchData(url: string | undefined){
    const token = localStorage.getItem("token");
    return axios.get(`${import.meta.env.VITE_API_URL}/${url}`,{headers: {'authorization': `bearer ${token}`}})
            .then((res) => res.data)
}