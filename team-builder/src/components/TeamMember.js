import React from "react";
// import styled from "styled-components";

export default function Member(props) {
    const { details } = props

    if (!details) {
        return <h3>Loading Member Details</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Age: <span>{details.age}</span></p>
            <p>Email: <span>{details.email}</span></p>
            <p>Role: <span>{details.role}</span></p>
        </div>
    )
}