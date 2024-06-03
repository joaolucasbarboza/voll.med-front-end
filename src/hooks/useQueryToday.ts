import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface Usuario {
  nome: string;
  cpf: string;
}

interface Medico {
  nome: string;
  especialidade: string;
}

export type Types = {
  usuario: Usuario;
  medico: Medico;
  valor: string;
  data: string;
  formaPagamento: string;
  length: number;
}

export function useQueryToday() {
    const [dataQueryToday, setDataQueryToday] = useState<Types []>([]);
    const [isLoadingQueryToday, setIsLoadingQueryToday] = useState(true);

    async function fetchData() {
        await api
          .get("/consultas/consultas-hoje")
          .then((response) => {
    
            setDataQueryToday(response.data);
    
            setIsLoadingQueryToday(false);
          })
          .catch((error) => console.error(error));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return {
        isLoadingQueryToday,
        dataQueryToday,
    }
}