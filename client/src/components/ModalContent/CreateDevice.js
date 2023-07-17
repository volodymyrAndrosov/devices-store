import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import { Row, Form } from "react-bootstrap";
import DropdownToggleMenu from "../DropdownToggleMenu";
import ModalButton from "../ModalButton";
import { makeBrands, makeTypes } from "../../store/selectors";
import InfoList from "../../components/InfoList";
import httpService from "../../services/httpService";
import { setNotification } from "../../store/actions/index";

const mapStateToProps = createStructuredSelector({
  TYPES: makeTypes(),
  BRANDS: makeBrands(),
});

const CreateDevice = props => {
  const dispatch = useDispatch();
  const { TYPES, BRANDS } = props;
  const [brand, setBrand] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();
  const [info, setInfo] = useState([]);

  const addDevice = e => {
    e.preventDefault();

    if (brand && type && price && file && info.length) {
      const activeBrand = BRANDS.brands.find(item => {
        return (item.name = brand);
      });
      const activeType = TYPES.types.find(item => {
        return (item.name = type);
      });

      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", `${price}`);
      formData.append("img", file);
      formData.append("brandId", activeBrand.id);
      formData.append("typeId", activeType.id);
      formData.append("info", JSON.stringify(info));
      httpService
        .setCreateDevice(formData)
        .then(() => {
          dispatch(
            setNotification({ title: "info", description: "Device Added" })
          );
        })
        .catch(e => {
          dispatch(
            setNotification({
              title: "info",
              description: "Error from server",
            })
          );
        });
    } else {
      dispatch(
        setNotification({
          title: "info",
          description: "bad input data try again",
        })
      );
    }
  };

  return (
    <ModalButton
      titleText='Модальное окно с добавлением устройства'
      buttonText='добавить устройство'
      onSaveClick={addDevice}>
      <Row className='justify-content-center'>
        <DropdownToggleMenu
          title={"Выберите тип"}
          setValue={setType}
          data={TYPES.types}
          value={type}
        />
        <DropdownToggleMenu
          title={"Выберите бренд"}
          setValue={setBrand}
          data={BRANDS.brands}
          value={brand}
        />
      </Row>

      <Form.Control
        placeholder='Введите название устройства'
        className='mt-3'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Form.Control
        placeholder='Введите стоимость устройства'
        className='mt-3'
        type='number'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <Form.Control
        className='mt-3'
        type='file'
        onChange={e => setFile(e.target.files[0])}
      />
      <InfoList propertyList={info} setPropertyList={setInfo} />
    </ModalButton>
  );
};

export default connect(mapStateToProps)(CreateDevice);
