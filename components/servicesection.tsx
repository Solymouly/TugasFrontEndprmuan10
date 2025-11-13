"use client";
import { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';

interface ServiceItem {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  longDescription: string; 
}

const serviceData: ServiceItem[] = [
  {
    id: 1,
    title: "Service 1",
    imageSrc: "images/about-icon1.png",
    description: "Description of Service 1.",
    longDescription: "Ini adalah deskripsi LENGKAP untuk Service 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis."
  },
  {
    id: 2,
    title: "Service 2",
    imageSrc: "images/about-icon2.png",
    description: "Description of Service 2.",
    longDescription: "Deskripsi LENGKAP untuk Service 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis."
  },
  {
    id: 3,
    title: "Service 3",
    imageSrc: "images/about-icon3.png",
    description: "Description of Service 3.",
    longDescription: "Deskripsi LENGKAP untuk Service 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis."
  }
];


function ServiceSection() {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    const handleShowModal = (service: ServiceItem) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    return (
        <>
            <Container className='my-5'>

                <Row>
                    {serviceData.map((service) => (
                        <Col 
                            md={4} 
                            className="mb-3 text-center" // Saya rapikan className Anda
                            key={service.id}
                            onClick={() => handleShowModal(service)}
                            style={{ cursor: 'pointer' }} // Menambahkan kursor pointer
                        >
                            <Image src={service.imageSrc} alt={service.title} fluid />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                {selectedService && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedService.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image 
                                src={selectedService.imageSrc} 
                                alt={selectedService.title} 
                                fluid 
                                className="mb-3" 
                            />
                            <p>{selectedService.longDescription}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    )
}

export default ServiceSection;