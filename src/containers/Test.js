import React from 'react'

export const Test = () => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: "https://gw-demo-proctor.s3.ap-south-1.amazonaws.com/studentTestLiveImages/2065/230466/12966041/230466_1639980324857.wav" })
    };
    fetch('https://g6ja1p41xd.execute-api.ap-south-1.amazonaws.com/default/temp1', requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    return (
        <div>
            Hello World!
        </div>
    )
}
