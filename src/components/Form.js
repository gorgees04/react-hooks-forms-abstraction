import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isChecked: false,
  });
  const [submitData, setSubmitData] = useState([]);

  const handleChanges = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName.length > 0) {
      setSubmitData([...submitData, formData]);
      setFormData({
        firstName: "",
        lastName: "",
        isChecked: false,
      });
    }
  };
  console.log(submitData);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChanges}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChanges}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="isChecked"
        onChange={handleChanges}
        checked={formData.isChecked}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
