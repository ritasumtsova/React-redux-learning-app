import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchUsers } from '../store/users/usersActionCreators';
import { User } from '../types/APIIntefaces';
import { ActionType } from '../types/storeTypes';
import { ThunkDispatch } from 'redux-thunk';


const Thunk: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const errorMsg = useSelector((state: RootState) => state.users.errorMsg);
  const loading = useSelector((state: RootState) => state.users.loading);

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, ActionType>>();

  const getUsers = () => dispatch(fetchUsers());

  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      <h1>Users list</h1>
      {
        errorMsg
        ? <h1>{errorMsg}</h1>
        : users!.map((user: User) => <p>{user.name}</p>)
      }
    </div>
  )
};

export default Thunk;
