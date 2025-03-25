import React from 'react';

export default function Home() {
    const [setVal, val] = React.useState('');
    const apiUrl = `http://business-backend-svc:8080`;
    fetch(`${apiUrl}/helloworld`)
        .then(response => response.json())
        .then(data => setVal(data));

    return(
        <>
            Business Management Home webhook test
            Backend response: {val}
        </>
    )
}
