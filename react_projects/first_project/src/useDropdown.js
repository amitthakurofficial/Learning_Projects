import React from 'react';
import { useState } from 'react/cjs/react.development';

const Usedropdown = (label,defaultState,options) => {
    const [state,setState] = useState(defaultState);
    const id = label.replace(" ","").toLowerCase()

    const DropDown = ()=> (
        <label htmlFor={id}>
            {label}
            <select id={id} value = {state}
            onChange = {e => setState(e.target.value)}
            onBlur = {e => setState(e.target.value)}
            disabled = {options.length ===0}>    
            <option >All</option>
            {
                options.map(item => (
                    <option key ={item} value={item}>{item}</option>
                ))
            }
            </select>
            </label>
    );
    // console.log("state___",state,"dp++++++++++",DropDown,"set state",setState)
    return [state,DropDown,setState];
}

export default Usedropdown;