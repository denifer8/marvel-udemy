
import React, { useState } from "react";
import { Menu } from 'semantic-ui-react';
import "./Header.scss";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {


    const currentPath = useLocation();
    const finalCurrentPath = currentPath.pathname.replace("/","");
    const [activeItem, setActiveItem] = useState(finalCurrentPath);
    const history = useNavigate();

    const handleItemClick = ( e, {name}) => {
        setActiveItem(name);
        history(name);
    }

  return (
    <div className="App" >
        <Menu secondary className="App" >
            <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={ handleItemClick}  />
            <Menu.Item name="series" active={activeItem === "series"}  onClick={ handleItemClick} />
            <Menu.Item name="comics" active={activeItem === "comics"}  onClick={handleItemClick} />
        </Menu>
    
    </div>
  )
}
