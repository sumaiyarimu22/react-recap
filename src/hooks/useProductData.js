import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

const useProductData = () => {
  const data = useQuery({
    queryKey: ["products"],
    queryFn: retieveProducts,
  });

  return data;
};

export default useProductData;
