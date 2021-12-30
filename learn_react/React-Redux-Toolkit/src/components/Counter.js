import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { decreament, increament } from './features/counter/counterSlice';

const CounterWrapper =styled("div")`{
    text-align:center;
}`
;

const Counter =() => {
    // console.log(useSelector(state => state))
    const count =useSelector(state => state.value);
    const dispatch = useDispatch();

    return (
        <CounterWrapper>
            <h4>{count}</h4>
            <button onClick={() => dispatch(increament())} style={{marginRight:20}}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
        </CounterWrapper>
    )

} 

export default Counter;