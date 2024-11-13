
function CustomInput({ type = "text", disabled = false, inputChange="", name, formData, checked="", setCheck="", num=""}) {

    return (
        <input 
            type={type}
            name={name}
            value={formData.hasOwnProperty(name) ? formData[name] : ""}
            onChange={type !== "checkbox" ? (event) => {
                inputChange(name, event.target.value);
                } : 
                () => {}
                }
            disabled={disabled}
            onClick={type === "checkbox" ? () => 
                {
                    setCheck(isChecked => isChecked ? false : true);
                    inputChange(`endDate${num}`, "");
                } :
                () => {}
            }
            checked={checked}
        />
    )
}

export default CustomInput;