import { api } from "@/services/api";
import { useEffect, useState } from "react";

export type PatientsType = {
  foto: object;
  id: string;
  nome: string;
  email: string;
  cpf: string;
}

interface PatientsResponse {
  content: PatientsType[];
}

export function useQueryPatients() {
  const [dataPatients, setDataPatients] = useState<PatientsResponse | null>(null);
  const [isLoadingPatients, setIsLoadingPatients] = useState(true);

  async function fetchData() {
    await api
      .get("/usuarios")
      .then((response) => {

        setDataPatients(response.data);

        setIsLoadingPatients(false);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    dataPatients,
    isLoadingPatients,
  };
}
