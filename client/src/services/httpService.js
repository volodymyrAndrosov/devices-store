import {
  fetchTypes,
  fetchBrands,
  fetchDevices,
  fetchOneDevice,
  createType,
  createBrand,
  createDevice,
} from "../http/deviceApi";

import { createBasketDevice, getBasketDevices } from "../http/basketApi";

const fetchData = async fetchFoo => {
  let response;
  try {
    response = await fetchFoo();
  } catch (e) {
    console.log(e);
  }

  return response;
};

const getTypesFromServer = () => fetchData(fetchTypes);
const getBrandsFromServer = () => fetchData(fetchBrands);
const getDevicesFromServer = data => fetchData(() => fetchDevices(data));
const getSingleDeviceFromServerById = id => fetchData(() => fetchOneDevice(id));
const setCreateTypeToServer = type => fetchData(() => createType(type));
const setCreateBrandToServer = brand => fetchData(() => createBrand(brand));
const setCreateDevice = data => fetchData(() => createDevice(data));
const setBasketDeviceToServer = id => fetchData(() => createBasketDevice(id));
const getBasketDeviceFromServer = () => fetchData(getBasketDevices);

const httpService = {
  getTypesFromServer,
  getBrandsFromServer,
  getDevicesFromServer,
  getSingleDeviceFromServerById,
  setCreateTypeToServer,
  setCreateBrandToServer,
  setCreateDevice,
  setBasketDeviceToServer,
  getBasketDeviceFromServer,
};

export default httpService;
