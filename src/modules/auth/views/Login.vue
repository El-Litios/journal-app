<template>
  <span class="login100-form-title p-b-41"> Ingresar </span>
  <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input class="input100" v-model="userForm.email" type="text" placeholder="Correo" required />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        class="input100"
        type="password"
        v-model="userForm.password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn">Login</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'Register'}">¿No tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useAuth from "../composables/useAuth";
import Swal from 'sweetalert2'
import {useRouter} from 'vue-router'
export default {
  setup(){
    const router = useRouter();
    const { signIn } = useAuth();
    const userForm = ref({
      email: "carlos@gmail.com",
      password: "123456",
    });

    return {
      userForm,
      onSubmit: async () => {
        const {ok, message} = await signIn(userForm.value)

        if ( !ok) Swal.fire('Error', message, 'error')
        else router.push( {name: 'No-entry'} )
      },
    };
  }
};
</script>
