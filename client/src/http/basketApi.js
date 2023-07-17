import { $authHost } from "./index";

const createBasketDevice = async deviceId => {
  const data = await $authHost.post("api/basket/createBasketDevice", {
    id: deviceId,
  });

  return data;
};

const getBasketDevices = async () => {
  const data = await $authHost.get("api/basket/getBasketDevices");

  return data;
};

export { createBasketDevice, getBasketDevices };
