import CustomInput from "./Input";

function General() {
    return (
    <section>

      <h2>General Information</h2>

      <fieldset>
        <p>
          <label>
            Full Name:
            <CustomInput />
          </label>
        </p>

        <p>
          <label>
            Email:
            <CustomInput type="email" />
          </label>
        </p>

        <p>
          <label>
            Phone Number:
            <CustomInput type="tel" />
          </label>
        </p>

      </fieldset>

    </section>
    );
  }
  
  export default General;