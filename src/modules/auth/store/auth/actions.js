import { auth } from "@/api/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user;
  createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);
      updateProfile(user, { displayName: name });
      commit('loginUser', user);
    })
    .catch((error) => {
      console.log(error);
    });
};
