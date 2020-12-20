function log({ login, password }) {
  return dispatch => login({
    login,
    password,
  }).then(() => {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'ON_LOGIN', payload: user });
  });
}

function logout() {
  return (dispatch) => {
    dispatch({ type: 'ON_LOGOUT' });
  };
}

export { log, logout };
