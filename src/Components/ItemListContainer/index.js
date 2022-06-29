import React from "react";
import "./styles.css";
import ItemCount from "../ItemCount/itemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) =>{
        console.log(`¡Compraste ${quantity} unidades!`);
    }

    return(
        <div className="landing">
            <span>{greeting}</span>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer;