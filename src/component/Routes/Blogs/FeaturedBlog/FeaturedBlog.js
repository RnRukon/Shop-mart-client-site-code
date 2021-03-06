import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './FeaturedBlog.css';

const FeaturedBlog = () => {
    return (
        <Col>
            <Card>
                <div className="card-img">
                    <Card.Img variant="top" src="https://lusion.arrowtheme.com/wp-content/uploads/2020/08/arnel-hasanovic-jJqd2mc-M9Q-unsplash-1300x650.jpg" />
                </div>
                <div className="author-img">
                    <img src="https://i.ibb.co/WFSHcnQ/download.png" alt='' />
                </div>
                <div className="category">Category</div>
                <Card.Body>
                    <Card.Title>Our Latest Backyard Addition</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <a href="/"> Read More...</a>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default FeaturedBlog;