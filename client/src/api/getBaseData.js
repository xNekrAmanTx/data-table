import { baseUrl } from "../constants";

export const getBaseData = (url = baseUrl) => fetch(url).then((res) => res.json());
