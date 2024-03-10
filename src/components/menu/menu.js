import React from 'react';
import { menuRoutes } from '../../routes/routesConsts';
import MenuItem from './menuItem';

function Menu() {
    const renderMenuItems = menuRoutes.map(({ name, path, icon }, idx) => (
        <MenuItem key={idx} name={name} path={path} icon={icon} />
    ));

    return (
        <div className="menu-container">
            {renderMenuItems}
        </div>
    );
};

export default Menu;