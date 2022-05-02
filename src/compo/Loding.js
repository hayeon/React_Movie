import React from 'react';
import './Loding.css';
import {Oval} from "react-loader-spinner";


function Loding () {
   
    return (
    
        <Oval 
        color="#ff0000" 
        height={100} 
        width={100}
        ariaLabel='loading'
        />
    
        

    ) ;

};

export default Loding;