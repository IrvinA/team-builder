import React, { useState } from "react";
import Form from "./TeamForm";
import Member from "./TeamMember";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 5%;
  text-align: center;

  h1 {
    font-size: 5rem;
    color: black;
    text-shadow: 2px 2px 4px lime;
  }

  h2 {
    color: darkblue;
    font-weight: 600;
    text-shadow: 2px 2px 4px lime;
    font-size: 2rem;
    border-bottom: 2px solid black;
    margin: 2% 40% 0;
  }

  h4 {
    color: red;
    text-shadow: 2px 2px 4px black;
    font-size: 2rem;
  }

  p {
    text-align: left;
    margin-left: 25%;
    color: darkblue;
    font-weight: 600;
    text-shadow: 2px 2px 4px lime;
    font-size: 1.5rem;
  }

  span {
    padding: 0 2%;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    text-shadow: none;
    border-bottom: 1px dotted black;
  }
`

const membersList = [
  // { name: "Irvin", age: "27", email: "arevalosirvin@gmail.com", role: "Web Developer"}
];

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

    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <StyledDiv>
      <h1>New Members Sign Up!</h1>

      {error &&<h4>{error}</h4>}
      <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />

      {
        members.map((member, idx) => {
          return (
            <Member key={idx} details={member} />
          )
        })
      }
    </StyledDiv>
  );
}

export default App;
