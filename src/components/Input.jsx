import { useState } from "react";

function CustomInput({ type = "text" }) {
    const [value, setValue] = useState("");

    return (
        <input 
            type={type}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    )
}

export default CustomInput;