import { useState } from "react";
import CustomInput from "./Input";

function Education() {

    const createEducation = () => {
        return (
            <fieldset key={crypto.randomUUID()}>
                <p>
                    <label>
                        School Name
                        <CustomInput />
                    </label>
                </p>

                <p>
                    <label>
                        Title of Study
                        <CustomInput />
                    </label>
                </p>

                <p>
                    <label>
                        Date of Study
                        <CustomInput />
                    </label>
                </p>
            </fieldset>
        );
    }

    const [items, setItems] = useState([createEducation()]);

    console.log(items);

    return (
        <section>
            <h2>Education</h2>
            
            {items.map((item) => item)}

            <button onClick={() => {
                setItems(oldItems => [...oldItems, createEducation()]);
            }}>
                Add Education
            </button>

        </section>
    );
  }
  
  export default Education;