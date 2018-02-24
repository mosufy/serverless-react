let initialState = {
  isAuthenticated: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_AUTHENTICATED':
      return { isAuthenticated: true };
    case 'REMOVE_AUTHENTICATED':
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export default auth;