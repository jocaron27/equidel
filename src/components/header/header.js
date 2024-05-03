import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { HeaderContainer, HorizontalLine, HeaderTitle, HeaderSubtitle, HeaderImage, Logo, HeaderImageContainer } from './headerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { Box, FlexBox, FlexBoxColumn, TitleSmall, cardProps } from '../styled';
import { Menu } from '../menu';

function Header() {
    const { isDesktop } = useMediaQuery();
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);
    const headerContainerPadding = isDesktop ? [5, 8] : [2];
    const titleContainerPadding = isDesktop ? [15, 0] : [10, 2];
    const pageTitleContainerPadding = isDesktop ? [0, 40] : [0];

    return (
        <HeaderContainer $variant={cardProps.variant.background} $p={headerContainerPadding}>
            <FlexBox $itemsPerRow={2}>
                <Logo>EA</Logo>
                <Menu />
            </FlexBox>

            <FlexBoxColumn $p={titleContainerPadding} $center>
                <HeaderTitle>Equidel Art</HeaderTitle>
                <HeaderImageContainer $p={[1.5]} $m={[-1]}>
                  <HeaderImage src="https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/concerto.jpeg" width={400} />
                </HeaderImageContainer>
                <HeaderSubtitle>by Robert Caron</HeaderSubtitle>
            </FlexBoxColumn>

            <Box $p={pageTitleContainerPadding}>
              <TitleSmall>{pageTitle}</TitleSmall>
              <HorizontalLine />
            </Box>
        </HeaderContainer>
    );
};

export default Header;