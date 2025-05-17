import CustomInput from "./Input";

function ExperienceFieldset({num, inputChange, formData}) {

    return (
        <fieldset>
        <legend className="text-xl font-semibold">Experience #{num}</legend>
            <p>
                <label className="block m-5">
                    *Company Name:&nbsp;
                    <CustomInput inputChange={inputChange} name={`companyName${num}`} formData={formData} required={true} 
                    classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-96 focus:ring-0"/>
                </label>
            </p>

            <p>
                <label className="block m-5">
                    *Position Title:&nbsp;
                    <CustomInput inputChange={inputChange} name={`positionTitle${num}`} formData={formData} required={true}
                    classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-96 focus:ring-0"/>
                </label>
            </p>

            <p>
                <label className="block m-5">
                    *Description:&nbsp;
                    <CustomInput inputChange={inputChange} name={`description${num}`} formData={formData} required={true} type="textarea"
                    classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-full focus:ring-0 h-32"/>
                </label>
            </p>

            <p>
                <label className="block m-5">
                    *Start Date:&nbsp;
                    <CustomInput type="date" inputChange={inputChange} name={`startDate${num}`} formData={formData} required={true}
                    classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 focus:ring-0"/>
                </label>
            </p>

            <p>
                <label className="flex flex-col m-5">
                    End Date:&nbsp;<br></br>
                    <CustomInput 
                        type="date" 
                        disabled={formData[`check${num}`]} 
                        inputChange={inputChange} name={`endDate${num}`} 
                        formData={formData} 
                        required={formData[`check${num}`] ? false : true}
                        classes="mr-7 mb-4 w-fit rounded-md border-0 bg-transparent py-1.5 pl-1.5 focus:ring-0"
                    />

                    <label className="inline">
                        <CustomInput 
                            type="checkbox" 
                            inputChange={inputChange}
                            name={`check${num}`}
                            formData={formData}
                            num={num}
                            required={false}
                            checked={formData[`check${num}`]}
                            />
                            &nbsp;&nbsp;I currently work here
                    </label>
                </label>
            </p>

        </fieldset>
    );
}


function Experience({ inputChange, experienceItems, setExperienceItems, formData }) {

    return (
        <section>
            <h2 className="font-bold text-3xl text-center m-10">Practical Experience</h2>
            
            {experienceItems.map((item) => {
                return <ExperienceFieldset key={item.key} num={item.id} inputChange={inputChange} formData={formData}/> 
            })}

            <button type="button" onClick={() => setExperienceItems(oldItems => [...oldItems, {id: oldItems.length + 1, key: crypto.randomUUID()}])}
                className="block mb-10 mx-auto mt-4"
            >
                Add Experience
            </button>
            <hr></hr>
        </section>
    );
  }
  
  export default Experience;