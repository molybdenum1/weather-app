// import { TextField } from "@mui/material";
import { useDispatch } from 'react-redux';
// import Button from "@mui/material/Button";
import { weaterListAction } from "../store/weather/weather.slice";
import { useState } from "react";

const InputArea = () => {
    
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    const handleAddCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(weaterListAction.addItem(input));
        setInput('');
    }
    
    return ( 
        <form onSubmit={handleAddCity}>
            <input
            value={input}
            onInput={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
                
            <button>Add</button>
        </form>
     );
}
 
export default InputArea;
// id="standard-basic" 
                // onInput={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} 
                // label="Enter your city" 
                // variant="standard" /> 