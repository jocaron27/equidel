import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Box, Button, Card, Text } from '../../styled';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const { data } = useContext(DataContext);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <Box>
            <Box>
                <Text>
                    Portfolio
                </Text>
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