import React from "react";
import { useDispatch, connect } from "react-redux";
import { makeBrands, makeActiveBrandId } from "../store/selectors";
import { Card, Row } from "react-bootstrap";
import { setActiveBrand } from "../store/actions";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  activeBrandId: makeActiveBrandId(),
  BRANDS: makeBrands(),
});

const BrandBar = props => {
  const { activeBrandId, BRANDS } = props;
  const dispatch = useDispatch();
  const { brands } = BRANDS || {};

  const onClick = type => {
    dispatch(setActiveBrand(type));
  };

  return (
    <Row className='d-flex '>
      {brands.map(brand => {
        const { id, name } = brand;

        return (
          <Card
            style={{
              cursor: "pointer",
              flex: "1 1 0px",
              borderWidth: "2px",
            }}
            key={id}
            className='p-3 mx-2'
            border={id === activeBrandId ? "primary" : "light"}
            onClick={() => onClick(brand)}>
            {name}
          </Card>
        );
      })}
    </Row>
  );
};

export default connect(mapStateToProps)(BrandBar);
