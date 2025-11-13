"use client";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about">
      <Container className="my-5">
        <Row className="my-4">
          <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>

            <h6 className="text-muted mb-3">What We Do & Why We Do It</h6>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
            
            <Button variant="primary" href="#contact">
                Learn More
            </Button>

          </Col>
          <Col md={6}>
            <Image 
              src="/images/about.jpg" 
              alt="About Us" 
              width={500}
              height={500}
             
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--bs-border-radius)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;