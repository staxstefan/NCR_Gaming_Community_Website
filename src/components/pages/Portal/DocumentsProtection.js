import React from "react";

// Hooks
import useForm from "./useForm";

// Validation
import validate from "./validateInfo";

// Components

// Icons 
import {AiOutlineClose} from 'react-icons/ai'

// Code
const DocumentsProtection = ({ submitForm }) => {
  const { handleChange, values, errors, handleSubmit } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form--section">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder={errors.password ? errors.password : "Input password"}
          id="password"
          name="password"
          className="input"
          value={values.password}
          onChange={handleChange}
        />
        <button className="form-input-btn" type="submit">
          {errors.password ?  <p className="errors--validation">{errors.password} <AiOutlineClose fontSize="16px" color="crimson"/></p> : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default DocumentsProtection;
