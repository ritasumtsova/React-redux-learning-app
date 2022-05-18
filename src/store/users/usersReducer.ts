import { ActionType } from "../../types/storeTypes";
import { usersTypes } from "./usersTypes";
import { UsersInitState } from "../../types/initStateInterfaces";

const initState: UsersInitState = {
  loading: false,
  users: [],
  errorMsg: ''
};

const usersReducer = (state: UsersInitState = initState, action: ActionType) => {
  switch(action.type) {
    case usersTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case usersTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errorMsg: ''
      };

    case usersTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        errorMsg: action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
