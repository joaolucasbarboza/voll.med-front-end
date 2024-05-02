import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ButtonLoading } from "./button-loading";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Este campo deve ser preenchido." })
    .email("Este não é um e-mail válido."),

  password: z.string(),
});

export function LoginInputs() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <div>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Entrar</h1>
        <p className="text-balance  text-muted-foreground">
          Digite seu e-mail abaixo para fazer login em sua conta
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        placeholder="nome@exemplo.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        placeholder="*********"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isLoading ? (
                <ButtonLoading
                  className="mt-6"
                  text="Entrando"
                />
              ) : (
                <Link to={{ pathname: "/dashboard" }}>
                  <Button
                    type="submit"
                    className="w-full mt-6"
                  >
                    Entrar
                  </Button>
                </Link>
              )}
            </form>
          </Form>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">
        Ainda não possui uma conta?{" "}
        <Link
          to={{ pathname: "/" }}
          className="underline"
        >
          Clique aqui
        </Link>
      </div>
    </div>
  );
}
