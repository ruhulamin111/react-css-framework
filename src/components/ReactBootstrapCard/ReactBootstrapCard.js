import React from 'react';
import Button from 'react-bootstrap/Button';

import { Card } from 'react-bootstrap';

const ReactBootstrapCard = ({ product }) => {
    const { name, price } = product;


    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted" >Last updated 3 mins ago</small>
                </Card.Footer>
                <Button variant="primary">Primary</Button>
            </Card>

        </div>
    );
};

export default ReactBootstrapCard;