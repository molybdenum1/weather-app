import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { weaterListAction } from "../store/weather/weather.slice";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const InputArea = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(weaterListAction.addItem(input));
    setInput("");
  };

  return (
    <form onSubmit={handleAddCity}>
      <TextField
        id="standard-basic"
        variant="standard"
        color="secondary"
        size="small"
        label="Enter your city"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <p></p>
      <button>
        <Button size="small" variant="contained" color="secondary">
          Add
        </Button>
      </button>
    </form>
  );
};

export default InputArea;
