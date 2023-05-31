import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const createUser = async (user) => {
    const res = await store.dispatch("auth/createUser", user);
    return res;
  };

  const signIn = async (user) => {
    const res = await store.dispatch("auth/signInUser", user);
    return res;
  };

  const checkAuthStatus = async () => {
    const res = await store.dispatch("auth/checkAuthenticationToken");
    return res;
  };

  return {
    createUser,
    signIn,
    checkAuthStatus,
    authStatus: computed(() => store.getters["auth/currentUserState"]),
  };
};

export default useAuth;
