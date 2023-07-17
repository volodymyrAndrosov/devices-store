import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ModalButton from "../ModalButton";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store/actions/index";
import httpService from "../../services/httpService";

const CreateBrand = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addType = e => {
    e.preventDefault();

    if (!value) {
      dispatch(
        setNotification({
          title: "info",
          description: "bad input value try again",
        })
      );
      return null;
    }

    httpService.setCreateBrandToServer({ name: value }).then(() => {
      setValue("");
      dispatch(
        setNotification({
          title: "info",
          description: "type was added",
        })
      );
    });
  };

  return (
    <ModalButton
      titleText='Модальное окно с добавлением бренда'
      buttonText='Добавить бренд'
      onSaveClick={addType}>
      <Form.Control
        placeholder='Добавить бренд...'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </ModalButton>
  );
};

export default CreateBrand;
