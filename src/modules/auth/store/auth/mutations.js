export const loginUser = (state, user) => {
  if (user) {
    localStorage.setItem("idToken", user.stsTokenManager.accessToken);
    localStorage.setItem("refreshToken", user.stsTokenManager.refreshToken);
    state.idToken = user.stsTokenManager.accessToken;
    state.refreshToken = user.stsTokenManager.refreshToken;
    state.user = {
      email: user.email,
      name: user.displayName,
    };
    state.status = "authenticated";
  }
};

export const logoutUser = (state) => {
  state.user = null;
  state.refreshToken = null;
  state.idToken = null;
  state.status = "not-authenticated";
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
};
