let initialState = {
  registerInterestModal: false
};

const modal = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_REGISTER_INTEREST_MODAL':
      return {
        ...state,
        registerInterestModal: state.registerInterestModal !== true,
      };
    default:
      return state;
  }
};

export default modal;