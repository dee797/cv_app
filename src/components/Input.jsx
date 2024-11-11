import { useState } from "react";

function CustomInput({ type = "text", disabled = false }) {
    const [value, setValue] = useState("");

    return (
        <input 
            type={type}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            disabled={disabled}
        />
    )
}

export default CustomInput;