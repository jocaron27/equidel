import React from 'react';
import { Box, Button, FlexBoxColumn, Text } from '../../styled';

function NotFound() {
    const navigateHome = () => window.location.assign('/');

    return (
        <FlexBoxColumn $center>
            <Box $m={[5]}>
              <Text>Oops, looks like this page is unavailable</Text>
            </Box>
            <Button onClick={navigateHome}>
              Take me to the gallery
            </Button>
        </FlexBoxColumn>
    );
};

export default NotFound;