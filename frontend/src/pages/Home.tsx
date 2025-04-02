import React from 'react';
import { useState } from "react";
import axios from 'axios';

export default function Home() {
    const [val, setVal] = useState("");

    axios.get(process.env.REACT_APP_API_URL + "/helloworld", {
    }).then((response) => {
        setVal(response.data);
    }).catch(function (error) {
        console.log(error.message);
    });

    return(
        <>
            Business Management Home webhook test
            <p>
                Backend response: {val}
            </p>

        </>
    )
}
