import { ActionType } from "./../../types/storeTypes";
import { btnCounterTypes } from "./btnCounterTypes";

export const increase = (): ActionType => {
  return {
    type: btnCounterTypes.INCREASE,
  };
};

export const decrease = (): ActionType => {
  return {
    type: btnCounterTypes.DECREASE,
  };
};

export const inputIncrease = (value: number): ActionType => {
  return {
    type: btnCounterTypes.INPUT_INCREASE,
    payload: value
  };
};

export const inputDecrease = (value: number): ActionType => {
  return {
    type: btnCounterTypes.INPUT_DECREASE,
    payload: value
  };
};

