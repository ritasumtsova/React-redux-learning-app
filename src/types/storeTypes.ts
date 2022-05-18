import { User } from "./APIIntefaces";
import { usersTypes } from "./../store/users/usersTypes";
import { btnCounterTypes } from "../store/btnCounter/btnCounterTypes";

interface INCREASE {
  type: btnCounterTypes.INCREASE;
}

interface DECREASE {
  type: btnCounterTypes.DECREASE;
}

interface INPUT_INCREASE {
  type: btnCounterTypes.INPUT_INCREASE;
  payload: number;
}

interface INPUT_DECREASE {
  type: btnCounterTypes.INPUT_DECREASE;
  payload: number;
}

interface FETCH_USERS {
  type: usersTypes.FETCH_USERS;
}

interface FETCH_USERS_REQUEST {
  type: usersTypes.FETCH_USERS_REQUEST;
}

interface FETCH_USERS_SUCCESS {
  type: usersTypes.FETCH_USERS_SUCCESS;
  payload: User[]
}

interface FETCH_USERS_ERROR {
  type: usersTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type ActionType = 
  INCREASE 
  | DECREASE 
  | INPUT_INCREASE 
  | INPUT_DECREASE
  | FETCH_USERS
  | FETCH_USERS_REQUEST
  | FETCH_USERS_SUCCESS
  | FETCH_USERS_ERROR;