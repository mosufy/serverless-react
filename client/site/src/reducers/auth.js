let initialState = {
  isAuthenticated: false,
  isLoading: true,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_AUTHENTICATED':
      return { isAuthenticated: true, isLoading: false };
    case 'REMOVE_AUTHENTICATED':
      return { isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
};

export default auth;