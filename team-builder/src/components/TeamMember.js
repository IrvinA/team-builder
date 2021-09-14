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
            <p>Age: {details.age}</p>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}