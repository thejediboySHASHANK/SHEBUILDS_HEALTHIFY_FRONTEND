import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"

// const Results = () => {
//     const [prediction, setPrediction] = useState(null);

//     useEffect (() => {
//         axios.get ('/prediction').then(Response => {
//             setPrediction(Response.data.prediction)
//         });
//     }, []);
    
//     return (
//         <div>

//         </div>
//     )



// }

const OtherComponent = () => {
    const [prediction, setPrediction] = useState(null);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000//predict').then(response => {
        setPrediction(response.data.prediction);
      });
    }, []);
  
    return (
      <div>
        { prediction && <div>Prediction: {prediction}</div> }
      </div>
    );
};

export default OtherComponent;