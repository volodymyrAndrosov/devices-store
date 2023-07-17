import React, { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import httpService from "../services/httpService";
import { Row } from "react-bootstrap";

const BasketPage = () => {
  const [basketData, setBasketData] = useState();

  useEffect(() => {
    httpService
      .getBasketDeviceFromServer()
      .then(data => setBasketData(data.data))
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  useDocumentTitle("Корзина");

  if (!basketData) return null;

  return (
    <div>
      {basketData.map(item => {
        return (
          <Row key={item.id} className='d-flex justify-content-center'>
            deviceId: {item.deviceId}
          </Row>
        );
      })}
    </div>
  );
};

export default BasketPage;
