import { orderKinds } from "../constants";

export const getDataByUrl = (url, { queryParam, order } = {}) => {
  const sortingParameters =
    order && order !== orderKinds.NONE ? `&sort[${queryParam}]=${order}` : ``;
  return fetch(url + sortingParameters).then((res) => res.json());
};
