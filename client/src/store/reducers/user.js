import {
  DELETE_NOTIFICATION,
  SET_AUTH,
  SET_NOTIFICATION,
  SET_USER,
  SET_TOTAL_PAGES,
  SET_ACTIVE_PAGE,
} from "../../const/duckKeys";
import { v4 as uuid } from "uuid";

const initState = {
  IS_AUTH: null,
  notificationList: [],
  userInfo: {},
  pagination: {
    limit: 3,
    totalCountPages: undefined,
    activePage: undefined,
  },
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOTAL_PAGES: {
      return {
        ...state,
        pagination: { ...state.pagination, totalCountPages: payload },
      };
    }
    case SET_ACTIVE_PAGE: {
      return {
        ...state,
        pagination: { ...state.pagination, activePage: payload },
      };
    }
    case SET_USER: {
      return { ...state, userInfo: { ...payload } };
    }
    case SET_AUTH:
      return { ...state, IS_AUTH: payload };
    case SET_NOTIFICATION: {
      const { title, description } = payload;
      const { notificationList } = state;
      const customNotification = {
        title,
        description,
        id: uuid(),
      };

      const isThisNotificationExist = notificationList.some(
        el => el.description === description
      );

      if (isThisNotificationExist) return state;

      notificationList.push(customNotification);

      return { ...state, notificationList: [...notificationList] };
    }
    case DELETE_NOTIFICATION: {
      const { id } = payload;
      const { notificationList } = state;
      const updatedNotifications = notificationList.filter(
        notification => notification.notificationId !== id
      );

      return { ...state, notificationList: [...updatedNotifications] };
    }
    default:
      return state;
  }
};

export default userReducer;
