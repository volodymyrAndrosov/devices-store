import React from "react";
import { Pagination } from "react-bootstrap";

const PageItem = props => {
  const { onClick, page, activePage } = props;

  return (
    <Pagination.Item onClick={onClick} active={activePage === page}>
      {page}
    </Pagination.Item>
  );
};

export default PageItem;
