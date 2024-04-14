import React from 'react';
import { menuRoutes } from '../../routes/routesConsts';
import MenuItem from './menuItem';
import { FlexBox } from '../styled';

function Menu() {
    const renderMenuItems = menuRoutes.map(({ name, path, icon }, idx) => (
        <MenuItem key={idx} name={name} path={path} icon={icon} />
    ));

    return (
        <FlexBox>
            {renderMenuItems}
        </FlexBox>
    );
};

export default Menu;