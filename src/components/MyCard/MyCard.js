import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({ user }) => {
    const { name, age } = user;
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body className='p-2'>
                <Card.Title className='text-primary'>{name}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {age} mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default MyCard;