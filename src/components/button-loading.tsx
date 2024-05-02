import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ComponentProps } from "react";

interface ButtonTypes extends ComponentProps<"button"> {
  text: string;
}

export function ButtonLoading(props: ButtonTypes) {
  return (
    <Button
      {...props}
      disabled
    >
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {props.text}
    </Button>
  );
}
