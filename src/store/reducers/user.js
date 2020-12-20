export const user = (state = {}, action) => {
  switch (action.type) {
    case 'ON_LOGIN':
      return action.payload;
    case 'ON_LOGOUT':
      return {};
    default:
      return state;
  }
};
