import React from "react";
import InfoItem from "./InfoItem";
import { Button } from "react-bootstrap";

const InfoList = ({ propertyList, setPropertyList }) => {
  const addNewProperty = () => {
    setPropertyList([
      ...propertyList,
      {
        title: "",
        description: "",
        number: Date.now(),
      },
    ]);
  };

  const removeInfoItem = number => {
    const updatePropertyList = propertyList.filter(propertyItem => {
      return propertyItem.number !== number;
    });

    setPropertyList([...updatePropertyList]);
  };

  const changeInfo = (key, value, number) => {
    setPropertyList(
      propertyList.map(i => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  return (
    <>
      <Button
        variant='outline-dark'
        className='mt-2 w-100'
        onClick={addNewProperty}>
        Добавить новое свойство
      </Button>
      {propertyList.map(property => {
        const { number } = property;

        return (
          <InfoItem
            key={number}
            number={number}
            removeInfoItem={removeInfoItem}
            changeInfo={changeInfo}
          />
        );
      })}
    </>
  );
};

export default InfoList;
