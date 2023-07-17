import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { makeDevices } from "../store/selectors";
import DeviceItem from "./DeviceItem/DeviceItem";

const DeviceList = () => {
  const DEVICES = useSelector(makeDevices());
  const { devices } = DEVICES;

  return (
    <Row>
      {devices.map(device => {
        return <DeviceItem key={device.id} device={device} />;
      })}
    </Row>
  );
};

export default DeviceList;
