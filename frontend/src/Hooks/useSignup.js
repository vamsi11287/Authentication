import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>{
    const [error,setError] = useState(null)
    const {dispatch} = useAuthContext()


    const signup = async(email,password)=>{
        setError(null)
        
        const responce = await fetch('http://localhost:5000/api/user/signup',{
            method:"POST",
            headers:{"Content-type":"Application/json"},
            body:JSON.stringify({email,password}),
        });


        const data = await responce.json();

        if(!responce.ok){
            setError(data.error)
        }
        if(responce.ok){
            // save user data in local Storage
            localStorage.setItem("user",JSON.stringify(data))

            // update user Context
            dispatch({type:"LOGIN",payload:data})
        }
    }
    return {signup,error}
} 