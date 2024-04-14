import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, TextSmall, variantProps } from '../styled';
import { Icon } from '@mui/material';

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
        <Button $variant={variantProps.secondary} className={menuItemContainerClassName} onClick={() => handleMenuItemClick(path)}>
            <Icon>
                {icon}
            </Icon>

            <Box>
                <TextSmall>
                    {name}
                </TextSmall>
            </Box>
        </Button>
    );
};

export default MenuItem;