import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { RootObject } from "../../interfaces/works.interface";

const instance = axios.create({
  baseURL: `http://localhost:1337/`,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

const getWorks = (): Promise<RootObject[]> => requests.get("designs");

const getWorkId = (id: string): Promise<RootObject[]> =>
  requests.get(`designs/${id}`);

const useWorks = () => {
  return useQuery<RootObject[], Error>("works", () => getWorks());
};
const useWorkId = (workId: string) => {
  return useQuery<RootObject[], Error>(["workId", workId], () =>
  getWorkId(workId)
  );
};

export { useWorks, getWorks, useWorkId };
