import CustomInput from "./Input";

function General({ inputChange, formData }) {
    return (
    <section>

      <h2>General Information</h2>

      <fieldset>
        <p>
          <label>
            *Full Name:
            <CustomInput inputChange={inputChange} name="fullName" formData={formData} required={true}/>
          </label>
        </p>

        <p>
          <label>
            *Email:
            <CustomInput type="email" inputChange={inputChange} name="email" formData={formData} required={true}/>
          </label>
        </p>

        <p>
          <label>
            *Phone Number:
            <CustomInput type="tel" inputChange={inputChange} name="phone" formData={formData} required={true}/>
          </label>
        </p>

      </fieldset>

    </section>
    );
  }
  
  export default General;