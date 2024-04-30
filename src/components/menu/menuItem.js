import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextSmall, variantProps } from '../styled';
import { MenuHoverLine, MenuItemButton, MenuItemContainer } from './menuStyledComponents';

function MenuItem({name, path, callback}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;

    const handleMenuItemClick = path => {
        navigate(path);
        
        if(callback) callback();
    };

    return (
        <MenuItemContainer $p={[1]} >
            <MenuItemButton isActive={isActive} $variant={variantProps.secondary} onClick={() => handleMenuItemClick(path)}>
                <TextSmall>
                    {name}
                </TextSmall>
            </MenuItemButton>

            <MenuHoverLine isActive={isActive} />
        </MenuItemContainer>
    );
};

export default MenuItem;