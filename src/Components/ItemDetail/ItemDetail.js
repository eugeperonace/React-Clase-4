import React from "react"
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({product}) =>{
    
    const {img, name, price, description}= product;
    
    const onAdd = (quantity) =>{
        console.log(`¡Compraste ${quantity} unidades!`);
    }

    return(
        <>
            <img src={img} alt="imggg" />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            
                <div>Talle</div>
                <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>    
            
                <p>{description}</p>
                <button>
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                </button>
            </div>

        </>
    );
};

export default ItemDetail;