import React, { useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import { Col, Container, Row } from "react-bootstrap";
import DeviceList from "../components/DeviceList";
import { useDispatch, connect } from "react-redux";
import {
  setTypes,
  setBrands,
  setDevices,
  setTotalPages,
} from "../store/actions/index";
import httpService from "../services/httpService";
import PageList from "../components/PageList";
import { createStructuredSelector } from "reselect";
import {
  makeActivePage,
  makeActiveTypeId,
  makeActiveBrandId,
  makeLimitPages,
} from "../store/selectors/index";
import useDocumentTitle from "../hooks/useDocumentTitle";

const mapStateToProps = createStructuredSelector({
  activeBrandId: makeActiveBrandId(),
  activeTypeId: makeActiveTypeId(),
  activePage: makeActivePage(),
  limit: makeLimitPages(),
});

const ShopPage = props => {
  const { activeBrandId, activeTypeId, activePage, limit } = props;
  const dispatch = useDispatch();

  const getTypesFromServer = async () => {
    const types = await httpService.getTypesFromServer();

    dispatch(setTypes(types));
  };

  const getBrandsFromServer = async () => {
    const brands = await httpService.getBrandsFromServer();

    dispatch(setBrands(brands));
  };

  const getDevicesFromServer = async data => {
    const devices = await httpService.getDevicesFromServer(data);
    if (devices) {
      dispatch(setDevices(devices.rows));
      dispatch(setTotalPages(devices.count));
    } else {
      dispatch(setDevices([]));
      dispatch(setTotalPages([]));
    }
  };

  useEffect(() => {
    getTypesFromServer();
    getBrandsFromServer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getDevicesFromServer({
      brandId: activeBrandId,
      typeId: activeTypeId,
      page: activePage,
      limit,
    });
  }, [activeBrandId, activeTypeId, activePage, limit]); // eslint-disable-line react-hooks/exhaustive-deps

  useDocumentTitle("Магазин");

  return (
    <Container style={{ height: window.innerHeight - 62 }}>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <PageList />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(ShopPage);
