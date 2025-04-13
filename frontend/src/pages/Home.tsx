import {useState} from 'react';
import axios from 'axios';

export default function Home() {
    const [val, setVal] = useState("");

    axios.get(import.meta.env.VITE_API_URL + "helloworld", {
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
