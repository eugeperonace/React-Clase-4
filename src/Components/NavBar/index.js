import React, { useState } from "react";
import './styles.css';
import CartWidget from "../CartWidget";
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/sacos',
        name: 'Sacos',
    },
    {
        id: 3,
        path: '/category/camisas',
        name: 'Camisas',
    },
    {
        id: 4,
        path: '/category/gorras',
        name: 'Gorras',
    },
];

const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="nav">
            <span className="nav-logo">EightShop</span>
            <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}>
               {categories.map((category) => (
                    <Link to={category.path} key={category.id} className="nav-item">{category.name}</Link>
                ))}
            </div>
            <div className="cart">
                <CartWidget />
            </div>

            <div className="nav-mobile">
                <div className="cart-mobile">
                    <CartWidget />
                </div>
                <div className={`nav-toggle ${isOpen ? "open" : ""}`.trim()} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;