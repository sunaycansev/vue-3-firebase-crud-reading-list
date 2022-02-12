<template>
  <form @submit.prevent="handleSubmit">
    <h2>Login</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
    <div v-if="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from "vue-router";
import useLogin from "../composable/useLogin";

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const {login,error} = useLogin()

    const handleSubmit = async () => {
      await login(email.value,password.value)
      if(!error.value){
        router.push("/")
      }
    }

    return { email, password, handleSubmit,login,error }
  }
}
</script>