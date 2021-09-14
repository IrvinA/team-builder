import React from "react";
// import styled from "styled-components";

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
        <form onsubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Type your Name"
                        maxLength="30"
                        onChange={onChange}
                        value={values.name}
                    />
                </label>

                <label>Age
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your Age"
                        onChange={onChange}
                        value={values.age}
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Type an Email"
                        onChange={onChange}
                        value={values.email}
                    />
                </label>

                <label>Role
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
            </div>
        </form>
    )
}