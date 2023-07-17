import cn from "classnames";
import React, { useState } from "react";
import { deleteNotification } from "../../store/actions";
import { Col, Toast } from "react-bootstrap";
import styles from "../Notification/Notification.module.scss";

const Notification = props => {
  const { notification, dispatch } = props;
  const { title, description, id } = notification;
  const [isActive, setIsActive] = useState(!!notification);

  const onCloseClick = () => {
    setIsActive(false);
    setTimeout(() => {
      dispatch(deleteNotification(id));
    }, 1000);
  };

  return (
    <Col>
      <Toast
        onClose={onCloseClick}
        className={cn(styles.Toast, { [styles.CloseAnimation]: !isActive })}>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto'>{title}</strong>
        </Toast.Header>
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </Col>
  );
};

export default Notification;
