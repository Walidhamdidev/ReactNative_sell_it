import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "https://strapi-rental-movies.onrender.com/api",
});

const get = apiClient.get;

apiClient.get = async (
  url: string,
  params?: {} | undefined,
  axiosConfig?: any
) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data as any);
    return response;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
