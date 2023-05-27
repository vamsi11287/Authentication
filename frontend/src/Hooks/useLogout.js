import { useAuthContext } from "./useAuthContext";

export const useLogout = () =>{
    const {dispatch} = useAuthContext()

    const logout = async(email,password) =>{
        // remove localstorage memory
        localStorage.removeItem('user')

        // update user context
        dispatch({type:"LOGOUT"})
    } 
    return {logout}
}