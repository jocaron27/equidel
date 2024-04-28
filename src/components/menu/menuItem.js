import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, SemanticButton, TextSmall, variantProps } from '../styled';

function MenuItem({name, path, callback}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;
    const menuItemContainerClassName = isActive ? 'menu-item-container-active' : 'menu-item-container';

    const handleMenuItemClick = path => {
        navigate(path);
        
        if(callback) callback();
    };

    return (
        <Box $p={[1]} >
            <SemanticButton $variant={variantProps.secondary} className={menuItemContainerClassName} onClick={() => handleMenuItemClick(path)}>
                <TextSmall>
                    {name}
                </TextSmall>
            </SemanticButton>
        </Box>
    );
};

export default MenuItem;