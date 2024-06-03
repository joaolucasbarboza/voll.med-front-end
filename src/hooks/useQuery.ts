import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface Types {
    totalElements: number,
}

export function useQuery() {
  const [dataQuery, setDataQuery] = useState<Types>();
  const [totalElements, setTotalElements] = useState<Types>();

  async function fetchData() {
    await api
      .get("/consultas")
      .then((response) => {

        setTotalElements(response.data.totalElements) 
        
        setDataQuery(response.data)
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    dataQuery,
    totalElements
  };
}
