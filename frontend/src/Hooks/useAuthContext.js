const {useContext } = require("react");
const { AuthContext } = require("../Context/AuthContext");

export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw Error("useAuthContext cannot be used")
    }
    return context 
}