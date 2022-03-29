import React from 'react';
import { CardGroup } from 'react-bootstrap';
import MyCard from '../MyCard/MyCard';

const Cards = () => {
    const users = [
        { id: 1, name: 'Manik', age: 10 },
        { id: 2, name: 'Amena', age: 10 },
        { id: 3, name: 'Arafat', age: 7 },
        { id: 5, name: 'Monir', age: 7 },
    ]
    return (
        <CardGroup className='mx-2 m-lg-5 gap-4'>
            {
                users.map(user => <MyCard key={user.id} user={user}></MyCard>)
            }
        </CardGroup>

    );
};

export default Cards;