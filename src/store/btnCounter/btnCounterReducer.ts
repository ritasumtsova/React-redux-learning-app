import { ActionType } from "../../types/storeTypes";
import { btnCounterTypes } from "./btnCounterTypes";
import { btnCounterInitState } from "../../types/initStateInterfaces";

const initState: btnCounterInitState = {
  count: 0
};

const btnCounterReducer = (state: btnCounterInitState = initState, action: ActionType) => {
  switch(action.type) {
    case btnCounterTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };

    case btnCounterTypes.DECREASE:
      return {
        ...state,
        count: state.count - 1
      };

    case btnCounterTypes.INPUT_INCREASE:
      return {
        ...state,
        count: state.count + action.payload
      };

    case btnCounterTypes.INPUT_DECREASE:
      return {
        ...state,
        count: state.count - action.payload
      };

    default:
      return state;
  }
};

export default btnCounterReducer;
