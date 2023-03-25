import { useState } from "react";

export default function useApi(apiFunc: (...args: any) => any) {
  const [data, setData] = useState<
    { id: number; title: string; image: string; price: number }[]
  >([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(response.data["error"]["message"]);
    // setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
}
