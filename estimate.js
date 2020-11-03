import React, { useState, useEffect } from "react";



const Estimator = () => {

    var msg = "Hello React!"


    return (

        <div>
            <p>{msg}</p>
        </div>
    )

};

export default Estimator;


ReactDOM.render(
    <Estimator />,
    document.getElementById('estimate-component-goes-here')
);





