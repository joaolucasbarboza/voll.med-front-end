import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginSchema = z.object({
  login: z
    .string()
    .min(1, { message: "Este campo deve ser preenchido." })
    .email("Este não é um e-mail válido."),

  senha: z.string(),
});

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      login: "",
      senha: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);

    setIsLoading(true);

    localStorage.removeItem("token");

    api
      .post("/login", values)
      .then((response) => {
        const token = response.data.token;

        localStorage.setItem("token", token);

        setIsAuthenticated(true);

        navigate("/");

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }

  return {
    form,
    onSubmit,
    isLoading,
    isAuthenticated,
  };
}
