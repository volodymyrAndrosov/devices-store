import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownToggleMenu = props => {
  const { title, data, setValue, value } = props;

  return (
    <Dropdown className='w-auto'>
      <Dropdown.Toggle>{value ? value : title}</Dropdown.Toggle>
      <Dropdown.Menu>
        {data.map(type => {
          const { name, id } = type;

          return (
            <Dropdown.Item key={id} onClick={() => setValue(name)}>
              {name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownToggleMenu;
