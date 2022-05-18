import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { increase, decrease } from '../store/btnCounter/btnCounterActionCreators';

const BtnCounter: React.FC = () => {
  const count = useSelector<RootState>((state) => state.btnCounter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </>
  );
};

export default BtnCounter;
