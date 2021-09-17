import axios from "axios";
import { useQuery } from "react-query";

const fetchWorks = async () => {
  const { data } = await axios.get("http://localhost:1337/designs");
  return data;
};

const useWorks: Function = () => {
  return useQuery(["works"], () => fetchWorks());
};

export { useWorks, fetchWorks };
