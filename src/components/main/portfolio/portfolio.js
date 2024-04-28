import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Anchor, Box, Button, Card, Text } from '../../styled';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const { data } = useContext(DataContext);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <Box>
            <Box>
            <Text>Welcome to my studio and gallery. One of my defining principles is conveying a sense of awe through the timeless medium of oil painting, establishing an open dialogue between form and emotion in all aspects of my artwork. Look through my work to see this in action, and <Anchor href="/contact">get in touch</Anchor> for more information. Some of my paintings can be seen at <Anchor href='https://www.garrettarts.org'>the Gallery Shop</Anchor> in Oakland, MD.</Text>
            <Text>"Robert Caron is a traditional oil painter known for his photo realistic paintings full of vibrant colors. His sweeping nature scenes are both realistic and magical, giving one a sense of true outdoor scene combined with the feeling of something beautifully ephemeral." -The Gallery Shop</Text>
            </Box>

            <Modal
				open={modalOpen}
                onClose={toggleModal}
                center
			>
                <Card>
                    <Box>
                        {JSON.stringify(data)}
                    </Box>
                </Card>
            </Modal>

            <Button onClick={toggleModal}>Open Modal To See Data</Button>
        </Box>
    );
};

export default Portfolio;