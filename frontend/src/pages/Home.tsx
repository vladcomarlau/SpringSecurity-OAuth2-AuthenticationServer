import React from 'react';
import { useState } from "react";
import axios from 'axios';

export default function Home() {
    const [val, setVal] = useState("");
    const apiUrl = `https://business-backend-svc:8080`;

    axios.get(apiUrl + "/helloworld", {
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
