import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface Endereco {
    logradouro: string,
    bairro: string,
    cep: string,
    numero: string,
    complemento: string,
    cidade: string,
    uf: string
}

export type PatientsType = {
  foto: object;
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: Endereco;
}

interface PatientsResponse {
  content: PatientsType[];
}

export function useQueryPatients() {
  const [dataPatients, setDataPatients] = useState<PatientsResponse | null>(null);
  const [isLoadingPatients, setIsLoadingPatients] = useState(true);

  function fetchData() {
    api
      .get("/pacientes")
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
