import { useState } from "react";
import CustomInput from "./Input";

function ExperienceFieldset({num}) {
    const [isChecked, setChecked] = useState(false);

    return (
        <fieldset>
        <legend>Experience #{num}</legend>
            <p>
                <label>
                    Company Name:&nbsp;
                    <CustomInput />
                </label>
            </p>

            <p>
                <label>
                    Position Title:&nbsp;
                    <CustomInput />
                </label>
            </p>

            <p>
                <label>
                    Description:&nbsp;
                    <CustomInput />
                </label>
            </p>

            <p>
                <label>
                    Start Date:&nbsp;
                    <CustomInput type="date"/>
                </label>
            </p>

            <p>
                <label>
                    End Date:&nbsp;
                    <CustomInput type="date" disabled={isChecked}/>
                </label>
            </p>

            <p>
                <label>
                    I currently work here&nbsp;
                    <input type="checkbox" onClick={() => setChecked(isChecked => isChecked ? false : true)} />
                </label>
            </p>

        </fieldset>
    );
}


function Experience() {
    const [items, setItems] = useState([{id: 1, key: crypto.randomUUID()}]);

    return (
        <section>
            <h2>Practical Experience</h2>
            
            {items.map((item) => {
                return <ExperienceFieldset key={item.key} num={item.id} /> 
            })}

            <button type="button" onClick={() => setItems(oldItems => [...oldItems, {id: oldItems.length + 1, key: crypto.randomUUID()}])}>
                Add Experience
            </button>

        </section>
    );
  }
  
  export default Experience;