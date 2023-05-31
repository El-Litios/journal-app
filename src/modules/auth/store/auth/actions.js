import { auth } from "@/api/auth";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name
    });

    commit('loginUser', user); 


    return {ok: true, message: 'Usuario Creado'}
  } catch (error) {
    console.log(error.code);
    return {ok: false, message: error.code}
  }
};

export const signInUser = async ({commit}, user) => {
  const {email, password } = user;
  try {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    commit('loginUser', user);
    return {ok: true, message: 'Usuario Logeado'}
  } catch (error) {
    console.log(error.code);
    return {ok: false, message: error.code}
  }
};

export const checkAuthenticationToken = async ({commit}) => {
  const idToken = localStorage.getItem('idToken')
  //const refreshToken = localStorage.getItem('refreshToken')
  if (!idToken) {
    commit('logout')
    
  }
  try {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(
        (user) => {
          commit('loginUser', user);
          unsubscribe(); // Detener la escucha de cambios
          resolve(user);
        },
        (error) => {
          commit('logout')
          reject(error);
        }
      );
    });
  } catch (error) {
    commit('logout')
    throw error;
  }
};
