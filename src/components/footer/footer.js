import React from 'react';
import { FooterContainer } from './footerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { Text, cardProps } from '../styled';

function Footer() {
    const { isDesktop } = useMediaQuery();
    const footerContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <FooterContainer $variant={cardProps.variant.background} $p={footerContainerPadding}>
            <Text>Footer</Text>
        </FooterContainer>
    );
};

export default Footer;