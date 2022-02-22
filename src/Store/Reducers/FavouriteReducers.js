const INITIAL_VALUE = {
  favouriteArr: [],
};

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return { ...state, favouriteArr: action.payload };
      break;

    default:
      return state;
      break;
  }
};
