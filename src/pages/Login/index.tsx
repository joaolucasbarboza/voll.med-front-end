import { ModeToggle } from "@/components/mode-toggle";
import WallpaperLogin from "@/assets/wallpaper-login.svg";
import { LoginInputs } from "@/components/login";

export function Login() {
  return (
    <div className="w-full lg:grid m-auto lg:grid-cols-2 flex min-h-screen">
      <div className="hidden relative bg-muted lg:block">
        <div className="absolute m-8 right-0">
          <ModeToggle />
        </div>
        <p className=" absolute bottom-0 m-8 text-lg text-zinc-200">
          Transformando a espera em antecipação, o nosso sistema de agendamento
          de consultas online está sempre pronto para trazer comodidade e
          tranquilidade à sua jornada de cuidados médicos.
        </p>
        <img
          src={WallpaperLogin}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center m-auto justify-center p-4 ">
        <div className="mx-auto grid max-w-[350px] gap-6">
          <LoginInputs />
        </div>
      </div>
    </div>
  );
}
