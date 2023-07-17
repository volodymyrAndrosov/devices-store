import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import httpService from "../services/httpService";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from "../assets/device/big_star.png";
import useDocumentTitle from "../hooks/useDocumentTitle";

const DevicePage = props => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const { img, name, rating, price, info } = device;

  useEffect(() => {
    httpService
      .getSingleDeviceFromServerById(id)
      .then(data => {
        setDevice(data);
      })
      .catch(e => console.log(e));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useDocumentTitle("Девайс");

  const onBasket = () => {
    httpService.setBasketDeviceToServer(id).then(() => {
      console.log("Товар добавлен в коризну");
    });
  };

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + img}
          />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}>
              {rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}>
            <h3>Цена: {price} грн.</h3>
            <Button variant={"outline-dark"} onClick={onBasket}>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {info.map((info, index) => {
          const { id, title, description } = info;

          return (
            <Row
              key={id}
              style={{
                background: index % 2 === 0 ? "light" : "transparent",
              }}>
              {title} :{description}{" "}
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;
