import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Anchor, Box, Button, Card, FlexBox, Text } from '../../styled';
import { PorfolioContainer } from './portfolioStyledComponents';
import { Quote } from '../../custom/quote';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const { data } = useContext(DataContext);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <FlexBox $center $p={[0, 5]}>
          <PorfolioContainer>
            <Box>
              <Text>Welcome to my studio and gallery. One of my defining principles is conveying a sense of awe through the timeless medium of oil painting, establishing an open dialogue between form and emotion in all aspects of my artwork. Look through my work to see this in action, and <Anchor href="/contact">get in touch</Anchor> for more information. Some of my paintings can be seen at <Anchor href="https://www.garrettarts.org"  target="_blank">the Gallery Shop</Anchor> in Oakland, MD.</Text>
            </Box>

            <Modal open={modalOpen} onClose={toggleModal} center>
              <Card>
                <Box>
                  {JSON.stringify(data)}
                </Box>
              </Card>
            </Modal>

            <Button onClick={toggleModal}>Gallery item</Button>

            <Box $m={[5]}>
              <Quote author="Leonardo da Vinci" image="./assets/paint.jpeg" imageWidth={550} borderWidth={830} borderHeight={355}>"The artist sees what others only catch a glimpse of." </Quote>
            </Box>
          </PorfolioContainer>
        </FlexBox>
    );
};

export default Portfolio;