import { api } from "@/services/api";
import { useEffect, useState } from "react";

export type DoctorType = {
  foto: object;
  id: string;
  nome: string;
  email: string;
  crm: string;
  especialidade: string;
}

interface DoctorsResponse {
  content: DoctorType[];
}

export function useQueryDoctors() {
  const [dataDoctors, setDataDoctors] = useState<DoctorsResponse | null>(null);
  const [isLoadingDoctors, setIsLoading] = useState(true);

  async function fetchData() {
    await api
      .get("/medicos")
      .then((response) => {

        setDataDoctors(response.data);

        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    dataDoctors,
    isLoadingDoctors,
  };
}
