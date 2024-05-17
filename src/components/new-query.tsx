import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { DoctorType, useQueryDoctors } from "@/hooks/useQueryDoctors";
import { AvatarAPI } from "./avatar";

export function NewQuery() {
  const { dataDoctors, isLoadingDoctors } = useQueryDoctors();

  return (
    <div className="px-6 py-4 md:py-8 flex m-auto w-full md:w-fit">
      <Card className="w-full md:w-[500px]">
        <CardHeader>
          <CardTitle>Nova consulta</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Selecione o médico</Label>
                <Select>
                  <SelectTrigger id="framework" className="h-fit flex">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {dataDoctors?.content.map(
                      (doctor: DoctorType, index: number) => (
                        <SelectItem
                          key={index}
                          value={doctor.id.toString()}
                        >
                          <div className="flex gap-2">
                            <AvatarAPI />

                            <div className="flex flex-col items-start">
                              <span>{doctor.nome}</span>
                              <span className="text-muted-foreground">{doctor.especialidade}</span>
                            </div>
                          </div>
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
