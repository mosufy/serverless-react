let initialState = {
  registerInterestModal: false,
  loginModal: false,
};

const modal = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_REGISTER_INTEREST_MODAL':
      return {
        ...state,
        registerInterestModal: state.registerInterestModal !== true,
      };
    case 'TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        loginModal: state.loginModal !== true,
      };
    default:
      return state;
  }
};

export default modal;