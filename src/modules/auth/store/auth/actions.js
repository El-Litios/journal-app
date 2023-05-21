import { auth } from "@/api/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = async ({ commit }, user) => {
  const { email, password } = user;
  try {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      commit();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
  } catch (error) {
    console.log('error aaaaa',error.reponse);
  }
};