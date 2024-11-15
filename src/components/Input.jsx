
function CustomInput({ type = "text", disabled = false, inputChange="", name, formData, num="", required, checked="", classes}) {

    return (
        <input 
            className={classes}
            type={type}
            name={name}
            value={formData.hasOwnProperty(name) ? formData[name] : ""}
            onChange={type !== "checkbox" ? (event) => {
                inputChange(name, event.target.value);
                } : 
                () => {}
                }
            disabled={disabled}
            onClick={type === "checkbox" ? (event) => 
                {
                    inputChange(name, event.target.checked);
                    inputChange(`endDate${num}`, "");
                } :
                () => {}
            }
            checked={checked}
            required={required}
        />
    )
}

export default CustomInput;