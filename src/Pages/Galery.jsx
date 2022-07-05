import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox />
      <Container>
          <h2 className='text-center m-4'>Team</h2>
          <CardGroup className='m-4 ml-4'>
            <Card>
              <Card.Img
                variant="top"
                src="https://pixabay.com/get/g18db2dcf384d06f434832a72c434bafaa8559d9ba92a8d6a6623449d22aa358d0bccdcbb9b2b84cd44d982e7d55eacc507f98da19c3a696027a828bdcfa63610_1280.jpg"/>
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.
                </Card.Text>
                <Button variant='dark'>About</Button>
           </Card.Body>
            </Card>
             <Card>
              <Card.Img
                variant="top"
                src="https://pixabay.com/get/g7b6c1294ff10787c77e2aca8b1695f14b723ba48fe583d41d98dbefa8734442aed560ed94fb946c065009f8841b2e5e5_640.jpg"/>
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.
                </Card.Text>
                <Button variant='dark'>About</Button>
           </Card.Body>
            </Card>
             <Card>
              <Card.Img
                variant="top"
                src="https://pixabay.com/get/g53985c13323533c4de30cd5abe0c316414ea28b3cf19a8428ed79c00141255d8620a3074df9d336ccb1d77383bfaa25b_640.jpg"/>
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.
                </Card.Text>
                <Button variant='dark'>About</Button>
           </Card.Body>
            </Card>
             <Card>
              <Card.Img
                variant="top"
                src="https://pixabay.com/get/gec39d7e4f3590fd03098b10cfb474e81b8842e429fd5e1dcdfa5fe5a8ba3c4273bfaf0e020d986702257a8efb7873893d14066343f859b66347cebb3294607dd_640.jpg"/>
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.
                </Card.Text>
                <Button variant='dark'>About</Button>
           </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        </>
    )
  }
}
