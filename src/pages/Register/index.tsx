import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="w-full lg:grid m-auto lg:grid-cols-2 flex min-h-screen">
      <div className="hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="flex items-center m-auto justify-center p-4 ">
        <div className="mx-auto grid max-w-[350px] border gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Crie a sua conta aqui</h1>
            <p className="text-balance text-muted-foreground">
              Digite seu e-mail abaixo para criar sua conta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to={{ pathname: "/" }}
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Faça login com e-mail
            </Button>
            <Button
              variant="outline"
              className="w-full"
            >
              Fazer login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to={{ pathname: "/" }}
              className="underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
