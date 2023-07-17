import React from "react";

import { Container } from "react-bootstrap";
import CreateType from "../components/ModalContent/CreateType";
import CreateBrand from "../components/ModalContent/CreateBrand";
import CreateDevice from "../components/ModalContent/CreateDevice";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AdminPage = () => {
  useDocumentTitle("Админка");

  return (
    <Container className='d-flex flex-column'>
      <CreateType />
      <CreateBrand />
      <CreateDevice />
    </Container>
  );
};

export default AdminPage;
