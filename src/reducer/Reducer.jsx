import { SHOP, DELETE } from "./Action";
let initialState = {
  cardCount: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP:
      console.log(state.cardCount);
      // console.log(action?.payload?.productData)
      // console.log("count===>",action?.payload?.count + 1)
      return {
        ...state,
        cardCount: [action?.payload, ...state?.cardCount]
          .filter((item, i, arr) => {
            return arr.findIndex((ele) => ele?.id === item.id) === i;
          })
          .filter((ele) => ele?.count > 0),
      };
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
