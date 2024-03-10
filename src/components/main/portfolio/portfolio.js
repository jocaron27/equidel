import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const { data } = useContext(DataContext);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="portfolio">
            <Modal
				open={modalOpen}
                onClose={toggleModal}
                center 
                classNames={{
                    overlay: 'video-modal-overlay',
                    modal: 'video-modal'
                }}
			>
                <div className="modal-bg">
                    {JSON.stringify(data)}
                </div>
            </Modal>

            <button onClick={toggleModal}>Open Modal To See Data</button>
        </div>
    );
};

export default Portfolio;