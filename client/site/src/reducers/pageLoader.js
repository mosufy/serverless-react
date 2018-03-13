let initialState = {
  isLoading: false,
};

const pageLoader = (state = initialState, action) => {
  switch(action.type) {
    case 'PAGE_LOADER_IS_LOADING':
      return {
        isLoading: true
      };
    case 'PAGE_LOADER_DONE_LOADING':
      return {
        isLoading: false
      };
    case 'TOGGLE_PAGE_LOADER':
      return {
        isLoading: state.isLoading !== true
      };
    default:
      return state;
  }
};

export default pageLoader;