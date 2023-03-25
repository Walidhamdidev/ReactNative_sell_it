import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "https://strapi-done-with-it.onrender.com/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const userStored = (await authStorage.getUser()) as any;
  const jwt = JSON.parse(userStored)["jwt"];
  if (!jwt || !request.headers) return;
  request.headers["Authorization"] = `Bearer ${jwt}`;
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
