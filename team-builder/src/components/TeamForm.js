import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
        font-weight: 600;
        text-shadow: 2px 2px 4px lime;
    }

    h3 {
        background-color: black;
        border: 1px solid black;
        color: white;
        margin: 1% 25%;
        padding: 2% 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    input, select {
        width: 25%;
        background-color: black;
        padding: 2%;
        text-shadow: 2px 2px 4px lime;
        font-weight: 600;
        color: white;
    }

    button {
        margin-top: 2%;
        padding: 2% 3%;
        font-size: 1.5rem;
        background-color: black;
        color: white;
        text-shadow:  2px 2px 2px lime;

    }
`

export default function Form(props) {
    const { update, submit, values } = props;
    
    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <StyledForm>
                <label>
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Type your Name"
                        maxLength="30"
                        onChange={onChange}
                        value={values.name}
                    />
                </label>

                <label>
                    <h3>Age</h3>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter Age"
                        onChange={onChange}
                        value={values.age}
                        min="1"
                        max="100"
                    />
                </label>

                <label>
                    <h3>Email</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type an Email"
                        onChange={onChange}
                        value={values.email}
                    />
                </label>

                <label>
                    <h3>Role</h3>
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="WD">Web Developer</option>
                        <option value="DS">Data Scientist</option>
                        <option value="TL">Team Lead</option>
                        <option value="PM">Project Manager</option>
                        <option value="INS">Instructor</option>
                        <option value="CE">Code Enthusiast</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <div>
                    <button>Submit</button>
                </div>
            </StyledForm>
        </form>
    )
}