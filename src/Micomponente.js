import React,{ useState } from "react";

const Micomponente = ({miProp}) => {
    
let miNumero = 0;

const handlerClick = () => {
    console.log("mensaje en evento");
}

    return(
        <>
            <div>{miProp}</div>
            <h1>{miNumero}</h1>
            <button onClick={handlerClick}>Click me</button>
        </>
    );
};

export default Micomponente;