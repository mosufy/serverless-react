export const togglePageLoader = () => {
  return {
    type: 'TOGGLE_PAGE_LOADER',
  }
};

export const showPageLoader = () => {
  return {
    type: 'PAGE_LOADER_IS_LOADING',
  }
};

export const hidePageLoader = () => {
  return {
    type: 'PAGE_LOADER_DONE_LOADING',
  }
};