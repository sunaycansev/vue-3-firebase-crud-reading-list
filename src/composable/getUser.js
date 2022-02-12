import {ref} from "vue"

import {auth} from "../firebase/config";
import {onAuthStateChanged} from "firebase/auth"

// refs
const user = ref(auth.currentUser)

// auth changes
onAuthStateChanged(auth,(_user) => {
    console.log("User state changed. Current User is : ",_user);
    user.value = _user
})

const getUser = () => {
    return {user}
}

export default getUser;

