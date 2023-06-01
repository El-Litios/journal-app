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

  const logout =  () => {
    store.commit('auth/logoutUser')
    store.commit('journal/clearEntries')
  };

  return {
    createUser,
    signIn,
    checkAuthStatus,
    logout,
    authStatus: computed(() => store.getters["auth/currentUserState"]),
    username: computed(() => store.getters["auth/userName"]),
  };
};

export default useAuth;
