import {ref} from "vue"
import {auth} from "../firebase/config";
import {createUserWithEmailAndPassword} from "firebase/auth"

const error = ref(null)
const isPending = ref(false)

const signup = async (email,password) => {
    error.value = null
    isPending.value = true

    try{
        const response = await createUserWithEmailAndPassword(auth,email,password)
        if(!response){
            throw new Error("Could not complete signup!")
        }
        error.value = null
    }catch (e) {
        console.log(e.message);
        error.value = e.message
    }finally {
        isPending.value = false
    }

}

const useSignUp = () => {
    return {
        error,
        isPending,
        signup
    }
}

export default useSignUp