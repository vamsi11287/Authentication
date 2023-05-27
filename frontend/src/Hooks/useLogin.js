import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () =>{
    const [error,setError] = useState()
    const {dispatch} = useAuthContext()

    const login = async(email,password) =>{
        setError(null)

        const responce = await fetch(`http://localhost:5000/api/user/login`,{
            method:"POST",
            headers:{"Content-type":"Application/json"},
            body:JSON.stringify({email,password})
        })

        const data = await responce.json()

        if(!responce.ok){
            setError(data.error)
        }
        if(responce.ok){

        // localstorage
        localStorage.setItem("user",JSON.stringify(data))

        // update user context
        dispatch({type:"LOGIN",payload:data})
        }

    }
    return {login,error}
}