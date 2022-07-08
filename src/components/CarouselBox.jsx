import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImgDonut from 'Images/ImgDonut.jpg';
import ImgGirl from 'Images/ImgGirl.jpg';


export default class CarouselBox  extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-80 h-50'
            src={ImgDonut}
            alt='Donut'
          />
          <Carousel.Caption>
            <h3>Donut images</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img
            className='d-block w-100'
            src={ImgGirl}
            alt='Girl1'
          />
          <Carousel.Caption>
            <h3>Donut images</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.</p>
          </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
    )
  }
}
