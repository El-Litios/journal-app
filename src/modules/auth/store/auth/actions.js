import { auth } from "@/api/auth";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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
    commit('logoutUser')
    console.log('no hay token');
    return {ok: false, message: 'No token activo'}
  }
  try {
    let result = { ok: false }
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        commit('loginUser', user);
        console.log('hay user');
        result = { ok: true }
      } 
    });
    return Promise.resolve(result);
  } catch (error) {
    commit('logoutUser')
    throw error;
  }
};
