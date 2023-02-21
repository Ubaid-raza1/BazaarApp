import { SHOP, DELETE } from "./Action";
let initialState = {
  cardCount: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP:
      return { ...state, cardCount: [action.payload, ...state.cardCount] };
    case DELETE:
      return {
        ...state,
        cardCount: [
          ...state?.cardCount.filter((ele) => ele?.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default Reducer;
