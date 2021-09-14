import React, { useState } from "react";
import Form from "./TeamForm";
import Member from "./TeamMember";
// import styled from "styled-components";

// const StyledDiv = styled.div`

// `

const membersList = [];

const initialFormValues = { name: "", age:"", email:"", role:"" }

function App() {
  const [members, setMembers] = useState(membersList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (input, value) => {
    setFormValues({ ...formValues, [input]: value});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name) {
      setError("Please type in your Name");
    } else if (!newMember.age) {
      setError("Please type in your Age");
    } else if (!newMember.email) {
      setError("Please type in a valid Email");
    } else if (!newMember.role) {
      setError("Please choose your Role");
    } else {
      setError("");
    }

    setMembers([newMember, ...members]);
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <h1>New Members Sign Up!</h1>

      {error && <h2>{error}</h2>}
      <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
