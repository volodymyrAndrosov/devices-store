import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFoundPage = props => {
  useDocumentTitle("Не существует");

  return <div>Not Found</div>;
};

export default NotFoundPage;
