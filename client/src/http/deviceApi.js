import { $authHost, $host } from "./index";

const createType = async type => {
  const { data } = await $authHost.post("api/type", type);

  return data;
};

const fetchTypes = async () => {
  const { data } = await $host.get("api/type");

  return data;
};

const createBrand = async brand => {
  const { data } = await $authHost.post("api/brand", brand);

  return data;
};

const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");

  return data;
};

const createDevice = async device => {
  const { data } = await $authHost.post("api/device", device);

  return data;
};

const fetchDevices = async ({ typeId, brandId, page = 1, limit }) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });

  return data;
};

const fetchOneDevice = async id => {
  const { data } = await $host.get("api/device/" + id);

  return data;
};

export {
  createType,
  fetchTypes,
  createBrand,
  fetchBrands,
  createDevice,
  fetchDevices,
  fetchOneDevice,
};
