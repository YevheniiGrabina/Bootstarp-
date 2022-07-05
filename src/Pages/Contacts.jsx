import React, { Component } from 'react'
import { Button, Form, FormCheck, Container } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width:'500px'}}>
        <h1 className='text-center'>Свяжитесь с нами</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email addres</Form.Label>
            <Form.Control type='email' placeholder='Enter email'/>
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>example textarea</Form.Label>
            <Form.Control as='textarea' rows="3"/>
          </Form.Group>
          <Form.Group controlId="formBasicCheackbox">
            <FormCheck type='checkbox' label='cheack me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
