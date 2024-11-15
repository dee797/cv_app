import CustomInput from "./Input";

function EducationFieldset({num, inputChange, formData}) {
    return (
        <fieldset>
        <legend className="text-xl font-semibold">Education #{num}</legend>
            <p>
                <label className="block m-5">
                    *School Name:&nbsp;
                    <CustomInput inputChange={inputChange} name={`schoolName${num}`} formData={formData} required={true}
                    classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-96 focus:ring-0"/>
                </label>
            </p>

            <p>
                <label className="block m-5">
                    *Title of Study:&nbsp;
                    <CustomInput inputChange={inputChange} name={`studyTitle${num}`} formData={formData} required={true}
                    classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-96 focus:ring-0"/>
                </label>
            </p>

            <p>
                <label className="block m-5">
                    *Expected/Actual Graduation Date:&nbsp;
                    <CustomInput type="date" inputChange={inputChange} name={`graduationDate${num}`} formData={formData} required={true}
                    classes="block mr-7 mb-10 flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 focus:ring-0"/>
                </label>
            </p>
        </fieldset>
    );
}


function Education({ inputChange, educationItems, setEducationItems, formData}) {

    return (
        <section>
            <h2 className="font-bold text-3xl text-center m-10">Education</h2>
            
            {educationItems.map((item) => {
                return <EducationFieldset key={item.key} num={item.id} inputChange={inputChange} formData={formData}/> 
            })}

            <button type="button" onClick={() => setEducationItems(oldItems => [...oldItems, {id: oldItems.length + 1, key: crypto.randomUUID()}])}
                className="block mb-10 mx-auto">
                Add Education
            </button>

        </section>
    );
  }
  
  export default Education;