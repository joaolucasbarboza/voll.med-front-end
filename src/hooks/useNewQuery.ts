import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { useState } from "react";

const formSchema = z.object({
  idMedico: z.string(),
  idUsuario: z.string(),
  // data: z.date(),
  especialidade: z.string(),
  formaPagamento: z.string(),
});

export function useNewQuery() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idUsuario: "",
      idMedico: "",
      especialidade: "",
      formaPagamento: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    await api
      .post("/consultas", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));

    console.log(values);
  }

  return {
    form,
    isLoading,
    onSubmit,
  };
}
