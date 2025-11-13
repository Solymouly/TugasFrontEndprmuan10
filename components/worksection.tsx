'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'; 

interface WorkItem {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  longDescription: string; 
}

const workData: WorkItem[] = [
  {
    id: 1,
    title: "Rice with wild boar liver and cutted chese form texas",
    imageSrc: "/images/image-44.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.",
    longDescription: "Ini adalah deskripsi LENGKAP untuk item pertama. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis."
  },
  {
    id: 2,
    title: "Rice with wild boar liver and cutted chese form texas",
    imageSrc: "/images/image-45.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.",
    longDescription: "Deskripsi LENGKAP untuk item KEDUA. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis."
  },
  {
    id: 3,
    title: "Rice with wild boar liver and cutted chese form texas",
    imageSrc: "/images/image-46.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.",
    longDescription: "Deskripsi LENGKAP untuk item KETIGA. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis."
  }
];


function WorkSection() {
    const [showModal, setShowModal] = useState(false); 
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null); 

    const handleShowModal = (work: WorkItem) => {
        setSelectedWork(work); 
        setShowModal(true);    
    };

    const handleCloseModal = () => {
        setShowModal(false);   
        setSelectedWork(null); 
    };

    return (
        <>
            <Container>
                <Row className='mb-3'>
                    <Col md={12} className="text-center">
                        <h2>What We Work</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis?</p>
                    </Col>
                </Row>
                <Row>
                    {workData.map((work) => (
                        <Col md={4} className="mb-3" key={work.id}>
                            <Card>
                                <Card.Img variant="top" src={work.imageSrc} />
                                <Card.Body>
                                    <Card.Title>{work.title}</Card.Title>
                                    <Card.Text>
                                        {work.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleShowModal(work)}>
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                {selectedWork && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedWork.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={selectedWork.imageSrc} className="mb-3" />
                            <p>{selectedWork.longDescription}</p>
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

export default WorkSection;