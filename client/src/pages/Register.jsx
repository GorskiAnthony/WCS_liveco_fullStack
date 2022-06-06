import React from "react";

const Register = () => {
  return (
    <div className="cardForm">
      <h1>S'enregistrer</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirme Password:
          <input type="password" name="repeat_password" />
        </label>
        <input type="submit" value="Go!" />
      </form>
    </div>
  );
};

export default Register;
