import React from "react"

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
        <form className="form-container" onsubmit={onSubmit}>
            
        </form>
    )
}