import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MenuItem({name, path, icon, callback}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;
    const menuItemContainerClassName = isActive ? 'menu-item-container-active' : 'menu-item-container';

    const handleMenuItemClick = path => {
        navigate(path);
        
        if(callback) callback();
    };

    return (
        <button className={menuItemContainerClassName} onClick={() => handleMenuItemClick(path)}>
            <span className="material-icons menu-item-icon">
                {icon}
            </span>

            <div className="menu-item-text">
                {name}
            </div>
        </button>
    );
};

export default MenuItem;