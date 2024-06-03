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

export function useQueryMonth() {
    const [dataQueryMonth, setDataQueryMonth] = useState<Types []>([]);
    const [isLoadingQueryMonth, setIsLoadingQueryMonth] = useState(true);

    async function fetchData() {
        await api
          .get("/consultas/consultas-mes")
          .then((response) => {
    
            setDataQueryMonth(response.data);
    
            setIsLoadingQueryMonth(false);
          })
          .catch((error) => console.error(error));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return {
        isLoadingQueryMonth,
        dataQueryMonth
    }
}