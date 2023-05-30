import { auth } from "@/api/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name
    });

    commit('loginUser', user); // Actualiza el estado del usuario en Vuex


    return {ok: true, message: 'Usuario Creado'}
  } catch (error) {
    console.log(error.code);
    return {ok: false, message: error.code}
  }
};
