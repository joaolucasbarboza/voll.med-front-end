import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-auto">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Oops!
      </h3>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Sorry, an unexpected error has occurred.
      </p>

      <blockquote className="mt-6 border-l-2 pl-6 italic">
       {error.statusText || error.message}
      </blockquote>
    </div>
  );
}
