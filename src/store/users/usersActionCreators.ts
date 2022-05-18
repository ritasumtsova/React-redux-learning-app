import { ActionType } from "./../../types/storeTypes";
import axios, { AxiosResponse } from 'axios';
import { usersTypes } from './usersTypes';
import { User } from '../../types/APIIntefaces';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

export const fetchUsersRequest = (): ActionType => {
  return {
    type: usersTypes.FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users: User[]): ActionType => {
  return {
    type: usersTypes.FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersError = (errorMsg: string): ActionType => {
  return {
    type: usersTypes.FETCH_USERS_ERROR,
    payload: errorMsg
  };
};

export const fetchUsers = (): ThunkAction<Promise<void>, RootState, unknown, ActionType> => {
  return async (dispatch: ThunkDispatch<RootState, unknown, ActionType>): Promise<void> => {
    dispatch(fetchUsersRequest());

    try {
      const res: AxiosResponse<User[]> = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users: User[] = res.data;

      dispatch(fetchUsersSuccess(users));
    } catch (err: any) {
      const errorMsg: string = err.message;

      dispatch(fetchUsersError(errorMsg));
    };
  };
};


