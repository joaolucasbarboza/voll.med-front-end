import { api } from "@/services/api";
import { useEffect, useState } from "react";

export type MedicinesType = {
    descricao: string,
    resumoMedicamento: string,
    numeroRegistro: string,
    estoque: number,
    dosagem: string,
    tipoRemedio: string
}

interface MedicinesResponse {
  content: MedicinesType[];
}

export function useQueryMedicines() {
  const [dataMedicines, setDataMedicines] = useState<MedicinesResponse | null>(null);
  const [isLoadingDoctors, setIsLoading] = useState(true);

  async function fetchData() {
    await api.get("/remedios")
    .then((response) => {

      setDataMedicines(response.data)

      console.log(dataMedicines);
      

      setIsLoading(false)
    })
    .catch((error) => console.error(error))
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    dataMedicines,
    isLoadingDoctors,
  };
}
