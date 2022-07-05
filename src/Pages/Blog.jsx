import React, { Component } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Card>
              <img
                width={150}
                height={150}
                className = "mr-3"
                src="https://pixabay.com/get/g020dbc205f74595a84ee7686929f7095db463e9cd2e34a49aa6d7fb57baabddc29ae8c7e29e0bd53c18ff7de483a6618230e8f4e15e90ef87a93864cd7a4189f_640.jpg"
                alt='img'
              />
              <Card.Body>
                <h5>Blog Post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis similique assumenda maxime, tempore dolor enim modi eum ea eos alias omnis! Porro, repudiandae unde sunt aspernatur non atque! Sunt!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
