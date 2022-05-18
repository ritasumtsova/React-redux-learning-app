import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { inputIncrease, inputDecrease } from '../store/btnCounter/btnCounterActionCreators';

const Input: React.FC = () => {
  const [value, setValue] = useState(0);
  const count = useSelector<RootState>((state) => state.btnCounter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(+e.target.value);
        }}/>
      <button onClick={() => {dispatch(inputIncrease(value))}}>Increase with the input value</button>
      <button onClick={() => {dispatch(inputDecrease(value))}}>Decrease with the input value</button>
    </>
  );
};

export default Input;