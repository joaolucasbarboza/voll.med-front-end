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

export function useQueryWeek() {
    const [dataQueryWeek, setDataQueryWeek] = useState<Types []>([]);
    const [isLoadingQueryWeek, setIsLoadingQueryWeek] = useState(true);

    async function fetchData() {
        await api
          .get("/consultas/consultas-semana")
          .then((response) => {
    
            setDataQueryWeek(response.data);
    
            setIsLoadingQueryWeek(false);
          })
          .catch((error) => console.error(error));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return {
        isLoadingQueryWeek,
        dataQueryWeek,
    }
}