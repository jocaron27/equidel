import React from 'react';
import { FooterContainer, SocialIconContainer } from './footerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { Anchor, Box, FlexBox, FlexBoxColumn, Text, Title, TitleSmall, cardProps } from '../styled';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon } from '@mui/material';

function Footer() {
    const { isDesktop } = useMediaQuery();
    const footerContainerPadding = isDesktop ? [5, 8] : [2];
    const iconSpacing = [0, 1];

    const FooterMenuContainer = isDesktop ? FlexBox : FlexBoxColumn;

    return (
        <FooterContainer $variant={cardProps.variant.background} $p={footerContainerPadding}>
            <Title>Reach out</Title>
            <Title>to me</Title>

            <FooterMenuContainer $itemsPerRow={3} $p={[10, 0, 0, 0]}>
                <FlexBoxColumn>
                    <TitleSmall>Email</TitleSmall>
                    <Anchor href="mailto:equidelart@gmail.com">
                        <Text>equidelart@gmail.com</Text>
                    </Anchor>
                </FlexBoxColumn>

                <FlexBox $center={isDesktop}>
                    <FlexBoxColumn>
                        <TitleSmall>Phone</TitleSmall>
                        <Anchor href="tel:301-859-0721">
                            <Text>(301) 859-0721</Text>
                        </Anchor>
                    </FlexBoxColumn>
                </FlexBox>

                <SocialIconContainer $isDesktop={isDesktop}>
                    <Box $p={iconSpacing}>
                        <Anchor href="https://www.instagram.com/equidelart/" target="_blank">
                            <Icon component={InstagramIcon} />
                        </Anchor>
                    </Box>

                    <Box $p={iconSpacing}>
                        <Anchor href="https://www.facebook.com/Equidel-Art-Studio-and-Gallery-106298207933442" target="_blank">
                            <Icon component={FacebookIcon} />
                        </Anchor>
                    </Box>

                    <Box $p={iconSpacing}>
                        <Anchor href="https://www.linkedin.com/in/robertfcaron/" target="_blank">
                            <Icon component={LinkedInIcon} />
                        </Anchor>
                    </Box>
                </SocialIconContainer>
            </FooterMenuContainer>

            <FlexBox $center $p={[20, 0, 0, 0]}>
              <Text>©2020 by Equidel Art</Text>
            </FlexBox>
        </FooterContainer>
    );
};

export default Footer;