import { useState } from "react";

function CustomInput({ type = "text", disabled = false, inputChange, name }) {
    const [value, setValue] = useState("");

    return (
        <input 
            type={type}
            name={name}
            value={!disabled ? value : ""}
            onChange={(event) => {
                setValue(event.target.value)
                inputChange(event);
            }}
            disabled={disabled}
        />
    )
}

export default CustomInput;