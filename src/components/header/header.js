import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { HeaderContainer, HorizontalLine } from './headerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { Box, FlexBox, FlexBoxColumn, SubTitle, Text, Title, TitleSmall, cardProps } from '../styled';
import { Menu } from '../menu';

function Header() {
    const { isDesktop } = useMediaQuery();
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);
    const headerContainerPadding = isDesktop ? [5, 8] : [2];
    const titleContainerPadding = isDesktop ? [20, 0] : [10, 2];
    const pageTitleContainerPadding = isDesktop ? [0, 40] : [0];

    return (
        <HeaderContainer $variant={cardProps.variant.background} $p={headerContainerPadding}>
            <FlexBox $itemsPerRow={2}>
                <Text>Equidel Art</Text>
                <Menu />
            </FlexBox>

            <FlexBoxColumn $p={titleContainerPadding} $center>
                <Title>Equidel Art</Title>

                <SubTitle>By Robert Caron</SubTitle>
            </FlexBoxColumn>

            <Box $p={pageTitleContainerPadding}>
              <TitleSmall>{pageTitle}</TitleSmall>
              <HorizontalLine />
            </Box>
        </HeaderContainer>
    );
};

export default Header;