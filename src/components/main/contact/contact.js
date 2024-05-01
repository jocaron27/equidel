import React from 'react';
import { Anchor, Box, FlexBox, FlexBoxColumn, Text } from '../../styled';
import { Icon } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    const contactSpacing = [2];
    return (
      <FlexBoxColumn $itemsPerRow={1} $p={[10, 0]} $center>
        <Box $p={[5]}>
          <Text>Like what you see? Get in touch to learn more.</Text>
        </Box>
        
        <Box $p={contactSpacing}>
          <Anchor href="mailto:equidelart@gmail.com">
              <Text>equidelart@gmail.com</Text>
          </Anchor>
        </Box>
        
        <Box $p={contactSpacing}>
          <Anchor href="tel:301-859-0721">
              <Text>(301) 859-0721</Text>
          </Anchor>
        </Box>
        
        <FlexBox $p={contactSpacing}>
            <Box>
                <Anchor href="https://www.instagram.com/equidelart/" target="_blank">
                    <Icon component={InstagramIcon} />
                </Anchor>
            </Box>

            <Box>
                <Anchor href="https://www.facebook.com/Equidel-Art-Studio-and-Gallery-106298207933442" target="_blank">
                    <Icon component={FacebookIcon} />
                </Anchor>
            </Box>

            <Box>
                <Anchor href="https://www.linkedin.com/in/robertfcaron/" target="_blank">
                    <Icon component={LinkedInIcon} />
                </Anchor>
            </Box>
        </FlexBox>
      </FlexBoxColumn>
    );
};

export default Contact;