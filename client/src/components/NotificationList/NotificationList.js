import React from "react";
import Notification from "../Notification/Notification";
import { makeNotifications } from "../../store/selectors/index";
import { useSelector, useDispatch } from "react-redux";
import styles from "../NotificationList/NotificationList.module.scss";

const NotificationList = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(makeNotifications());

  return notifications?.length ? (
    <div className={styles.NotificationContainer}>
      {notifications.map(notification => {
        return (
          <Notification
            key={notification.id}
            notification={notification}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  ) : null;
};

export default NotificationList;
