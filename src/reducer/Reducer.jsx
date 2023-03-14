import { SHOP, DELETE } from "./Action";
import { localDataCard } from "../data/LocalDatCard";
let initialState = {
  cardCount: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP:
      const tempCards = [...state?.cardCount];
      // console.log("=====>", tempCards);
      const currentCardIndex = tempCards?.findIndex(
        (item) => item?.id === action?.payload?.id
      );
      if (currentCardIndex !== -1)
        tempCards[currentCardIndex] = action?.payload;
      else tempCards.push(action?.payload);
      const updateArr = tempCards?.filter((ele) =>
        ele?.count === 0 ? ele?.id !== action?.payload?.id : ele
      );
      return {
        ...state,
        cardCount: updateArr,
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
