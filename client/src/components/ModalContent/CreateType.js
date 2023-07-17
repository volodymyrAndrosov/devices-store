import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ModalButton from "../../components/ModalButton";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store/actions/index";
import httpService from "../../services/httpService";

const CreateType = () => {
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

    httpService.setCreateTypeToServer({ name: value }).then(() => {
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
      titleText='Модальное окно с добавлением типа'
      buttonText='Добавить тип'
      onSaveClick={addType}>
      <Form.Control
        placeholder='Добавить тип...'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </ModalButton>
  );
};

export default CreateType;
