export const toggleRegisterInterestModal = () => {
  return {
    type: 'TOGGLE_REGISTER_INTEREST_MODAL',
  }
};

export const toggleLoginModal = (toOpen = null) => {
  return {
    type: 'TOGGLE_LOGIN_MODAL',
    payload: {
      toOpen
    },
  }
};