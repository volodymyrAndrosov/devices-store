import {
  SET_AUTH,
  SET_DEVICES,
  SET_BRANDS,
  SET_ACTIVE_TYPE,
  SET_ACTIVE_BRAND,
  SET_NOTIFICATION,
  DELETE_NOTIFICATION,
  SET_USER,
  SET_TYPES,
  SET_TOTAL_PAGES,
  SET_ACTIVE_PAGE,
} from "../../const/duckKeys";

const setAuth = payload => {
  return {
    type: SET_AUTH,
    payload: payload,
  };
};

const setDevices = payload => {
  return {
    type: SET_DEVICES,
    payload: payload,
  };
};

const setBrands = payload => {
  return {
    type: SET_BRANDS,
    payload: payload,
  };
};

const setTypes = payload => {
  return {
    type: SET_TYPES,
    payload: payload,
  };
};

const setActiveType = payload => {
  return {
    type: SET_ACTIVE_TYPE,
    payload: payload,
  };
};

const setActiveBrand = payload => {
  return {
    type: SET_ACTIVE_BRAND,
    payload: payload,
  };
};

const setNotification = payload => {
  return {
    type: SET_NOTIFICATION,
    payload: payload,
  };
};

const deleteNotification = payload => {
  return {
    type: DELETE_NOTIFICATION,
    payload: payload,
  };
};

const setUser = payload => {
  return {
    type: SET_USER,
    payload: payload,
  };
};

const setTotalPages = payload => {
  return {
    type: SET_TOTAL_PAGES,
    payload: payload,
  };
};

const setActivePage = payload => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: payload,
  };
};

export {
  setAuth,
  setDevices,
  setBrands,
  setActiveType,
  setActiveBrand,
  setNotification,
  deleteNotification,
  setUser,
  setTypes,
  setTotalPages,
  setActivePage,
};
