import CustomInput from "./Input";

function General({ inputChange, formData }) {
    return (
    <section>

      <h2 className="font-bold text-3xl text-center m-10">General Information</h2>

      <fieldset>
        <p>
          <label className="block m-5 mt-0">
            *Full Name:
            <CustomInput inputChange={inputChange} name="fullName" formData={formData} required={true}
            classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-96 focus:ring-0"/>
          </label>
        </p>

        <p>
          <label className="block m-5">
            *Email:
            <CustomInput type="email" inputChange={inputChange} name="email" formData={formData} required={true}
            classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-96 focus:ring-0"/>
          </label>
        </p>

        <p>
          <label className="block m-5 mb-10">
            *Phone Number:
            <CustomInput type="tel" inputChange={inputChange} name="phone" formData={formData} required={true}
            classes="block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1.5 w-64 focus:ring-0"/>
          </label>
        </p>

      </fieldset>

    </section>
    );
  }
  
  export default General;