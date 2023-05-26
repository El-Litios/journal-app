<template>
  <span class="login100-form-title p-b-41"> Registro </span>
  <form
    @submit.prevent="onSubmit"
    class="login100-form validate-form p-b-33 p-t-5"
  >
    <div class="wrap-input100 validate-input" data-validate="Ingrese Nombre">
      <input
        class="input100"
        type="text"
        placeholder="Nombre de Usuario"
        required
        v-model="userForm.name"
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>
    <div class="wrap-input100 validate-input" data-validate="Ingrese Correo">
      <input
        class="input100"
        type="text"
        placeholder="Correo"
        required
        v-model="userForm.email"
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div
      class="wrap-input100 validate-input"
      data-validate="Ingrese Contraseña"
    >
      <input
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
        v-model="userForm.password"
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn">Registrar</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'Login' }">¿Ya tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useAuth from "../composables/useAuth";
export default {
  setup() {
    const { createUser } = useAuth();

    const userForm = ref({
      name: "Carlos",
      email: "carlos@gmail.com",
      password: "123456",
    });

    return {
      userForm,
      onSubmit: async () => {
        createUser(userForm.value)
      },
    };
  },
};
</script>
