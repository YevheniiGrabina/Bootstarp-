import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImgGirl from 'Images/ImgGirl.jpg';
import ImgGirl2 from 'Images/ImgDonut.jpg';
import ImgDonut from 'Images/ImgGirl.jpg';
import ImgFlowers from 'Images/ImgFlowers.jpg';
import ImgCakes from 'Images/ImgCakes.jpg';

export default class CarouselBox  extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 h-70'
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
            alt='Girl'
          />
          <Carousel.Caption>
            <h3>Donut images</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img
            className='d-block w-100'
            src={ImgGirl2}
            alt='Girl'
          />
          <Carousel.Caption>
            <h3>Donut images</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img
            className='d-block w-100'
            src={ImgFlowers}
            alt='Flowers'
          />
          <Carousel.Caption>
            <h3>Donut images</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea ducimus, laudantium atque similique, quis excepturi maiores odio dolorum distinctio nam, ratione amet earum numquam animi rerum pariatur voluptas molestiae.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img
            className='d-block w-100'
            src={ImgCakes}
            alt='Cakes'
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
