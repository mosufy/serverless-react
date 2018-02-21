const metadata = (state = null, action) => {
  switch(action.type) {
    case 'STORE_METADATA':
      return action.payload;
    default:
      return state;
  }
};

export default metadata;