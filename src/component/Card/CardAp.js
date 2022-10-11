import Card from 'react-bootstrap/Card';
import React from 'react';
import './Card.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const CardAp = ({ data }) => {
    const { name, id, logo } = data;
    return (
        <div className='col-lg-4 col-sm-12'>
            <Card className='bg mx-5 my-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/${id}`} >   <Button variant="primary">Start Practice </Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardAp;