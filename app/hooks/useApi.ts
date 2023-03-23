import { useState } from "react";

export default function useApi(apiFunc: (...args: any) => any) {
  const [data, setData] = useState<
    { id: number; title: string; image: string; price: number }[]
  >([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    const allData = response.data as any;
    const listings: any = [];
    allData["data"].map((item: any) => {
      const obj = {
        id: item.id,
        title: item["attributes"]["title"],
        image: item["attributes"]["images"],
        price: item["attributes"]["price"],
      };
      listings.push(obj);
    });
    setData(listings);
  };

  return { data, error, loading, request };
}
