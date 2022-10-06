import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Ddd = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log("ddssd", { id })
    })
    return (
        <div style={{ color: 'red' }}>hello</div>
    )
}
export default Ddd;
