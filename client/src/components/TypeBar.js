import React from "react";
import { useDispatch, connect } from "react-redux";
import { makeTypes, makeActiveTypeId } from "../store/selectors";
import { ListGroup } from "react-bootstrap";
import { setActiveType } from "../store/actions";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  activeTypeId: makeActiveTypeId(),
  TYPES: makeTypes(),
});

const TypeBar = props => {
  const { activeTypeId, TYPES } = props;
  const dispatch = useDispatch();
  const { types } = TYPES || {};

  const onClick = type => {
    dispatch(setActiveType(type));
  };

  return (
    <ListGroup>
      {types.map(type => {
        const { id, name } = type;

        return (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            key={id}
            active={id === activeTypeId}
            onClick={() => onClick(type)}>
            {name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default connect(mapStateToProps)(TypeBar);
