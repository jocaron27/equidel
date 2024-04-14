import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { HeaderContainer } from './headerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { SubTitle, Title, TitleSmall, cardProps } from '../styled';
import { Menu } from '../menu';

function Header() {
    const { isDesktop } = useMediaQuery();
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);
    const headerContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <HeaderContainer $variant={cardProps.variant.background} $p={headerContainerPadding}>
            <Menu />
            <Title>Header Title</Title>
            <SubTitle>Header Subtext</SubTitle>
            <TitleSmall>{pageTitle}</TitleSmall>
        </HeaderContainer>
    );
};

export default Header;