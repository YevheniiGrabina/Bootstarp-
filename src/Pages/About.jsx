import React, { Component } from 'react';
import { Nav, Row, Col, Tab, Container } from 'react-bootstrap';


export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey= "first" >
          <Row>
            <Col sm={3}>
              {/* Колонка */}
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Process</Nav.Link >
                </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="second">About Me </Nav.Link >
                </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="third">Gifts</Nav.Link >
                </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="fourth">Сooperation</Nav.Link >
                </Nav.Item>
              </Nav>
            </Col>
            </Row>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://klike.net/uploads/posts/2021-01/1611131113_2.jpg"/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sint aperiam esse minus dolor eligendi vel numquam sit incidunt soluta, cumque laborum itaque cum harum obcaecati est illum explicabo beatae.</p>
                </Tab.Pane>
                   <Tab.Pane eventKey="second">
                  <img src="https://i.pinimg.com/736x/64/0c/73/640c7375066adda3f36ac147fca89f75.jpg"
                 />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sint aperiam esse minus dolor eligendi vel numquam sit incidunt soluta, cumque laborum itaque cum harum obcaecati est illum explicabo beatae.</p>

                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://i.pinimg.com/736x/64/0c/73/640c7375066adda3f36ac147fca89f75.jpg"
                 />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sint aperiam esse minus dolor eligendi vel numquam sit incidunt soluta, cumque laborum itaque cum harum obcaecati est illum explicabo beatae.</p>

                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://i.pinimg.com/736x/64/0c/73/640c7375066adda3f36ac147fca89f75.jpg"/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sint aperiam esse minus dolor eligendi vel numquam sit incidunt soluta, cumque laborum itaque cum harum obcaecati est illum explicabo beatae.</p>
                </Tab.Pane>
              </Tab.Content>
             </Col>
        </Tab.Container>
      </Container>
    )
  }
}
