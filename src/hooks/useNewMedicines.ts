import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  descricao: z.string(),
  resumoMedicamento: z.string().optional(),
  numero_registro: z
    .string()
    .regex(/^\d{13}$/, "O número de registro deve ter exatamente 13 dígitos"),
  estoque: z.number().nonnegative("O estoque deve ser um número não negativo"),
  dosagem: z.string(),
  tipo_remedio: z.string(),
});

export function useNewMedicines() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: "",
      resumoMedicamento: "",
      numero_registro: "",
      estoque: 0,
      dosagem: "",
      tipo_remedio: "",
    },
  });

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsLoading(true);

    await api
      .post("/remedios", values)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => {
        navigate("/medicines"),
        setIsLoading(false)
      });
  }

  return {
    form,
    isLoading,
    onSubmit,
  };
}
