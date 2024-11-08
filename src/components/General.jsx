import CustomInput from "./Input";

function General() {
    return (
    <section>
      <h1>General Information</h1>

      <form>
        <label>
          Full Name
          <CustomInput />
        </label>

        <label>
          Email
          <CustomInput type="email" />
        </label>

        <label>
          Phone Number
          <CustomInput type="tel" />
        </label>

      </form>

    </section>
    );
  }
  
  export default General;