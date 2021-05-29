import useSWR from "swr";
import { client } from "../lib/api";

export const useGetCuration = () => {
  const { data, error } = useSWR("/curation", (url) => client.get(url));

  const curationList = data?.data.data.curations;

  return { data: curationList, error };
};
