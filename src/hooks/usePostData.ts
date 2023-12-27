import axios from "axios";

function usePostData<Type>(url: string, data: Type ){
    const token = localStorage.getItem("token");
    return axios.post(`${import.meta.env.VITE_API_URL}/${url}`,data,{headers: {'authorization': `bearer ${token}`}})
}

export default usePostData