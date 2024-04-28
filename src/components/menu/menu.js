import React from 'react';
import { menuRoutes } from '../../routes/routesConsts';
import MenuItem from './menuItem';
import { MenuContainer } from './menuStyledComponents';

function Menu() {
    const renderMenuItems = menuRoutes.map(({ name, path }, idx) => (
        <MenuItem key={idx} name={name} path={path} />
    ));

    return (
        <MenuContainer>
            {renderMenuItems}
        </MenuContainer>
    );
};

export default Menu;