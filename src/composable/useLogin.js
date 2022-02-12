import {ref} from "vue"
import {auth} from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth"

const error = ref(null)
const isPending = ref(false)

const login = async (email,password) => {
    error.value = null
    isPending.value = true

    try{
        const response = await signInWithEmailAndPassword(auth,email,password)
        if(!response){
            throw new Error("Could not login signup!")
        }
        error.value = null
    }catch (e) {
        console.log(e.message);
        error.value = e.message
    }finally {
        isPending.value = false
    }

}

const useLogin = () => {
    return {
        error,
        isPending,
        login
    }
}

export default useLogin