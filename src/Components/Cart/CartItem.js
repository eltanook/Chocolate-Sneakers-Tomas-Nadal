import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UseCartContext } from './CartContext'


function CartItem({product, quantity}) {
    const { DelProduct } = UseCartContext();
    const { title, price, id} = product;

    return (
        <Card body id='cart-item'>
        <Container>
            <Row>
                <Col id='cart-item-title'> {title} </Col>
                <Col> Quantity: {quantity} </Col>
                <Col> ${price*quantity}</Col>
                <Col> <Button id='delete' onClick={() =>DelProduct(id) }>Delete</Button> </Col>
            </Row>
        </Container>
        </Card>
    )
}

export default CartItem