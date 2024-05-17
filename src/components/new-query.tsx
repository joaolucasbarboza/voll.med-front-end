import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useNewQuery } from "@/hooks/useNewQuery";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DoctorType, useQueryDoctors } from "@/hooks/useQueryDoctors";
import { Skeleton } from "./ui/skeleton";
import { PatientsType, useQueryPatients } from "@/hooks/useQueryPatients";

export function NewQuery() {
  const { form, onSubmit } = useNewQuery();
  const { dataDoctors, isLoadingDoctors } = useQueryDoctors();
  const { dataPatients, isLoadingPatients } = useQueryPatients();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Agendar uma consulta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <DialogHeader>
              <DialogTitle>Nova consulta</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isLoadingDoctors ? (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            ) : (
              <>
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="Selecione o médico" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Médicos</SelectLabel>

                      {dataDoctors?.content.map(
                        (doctor: DoctorType, index: number) => (
                          <SelectItem
                            key={index}
                            value={doctor.id.toString()}
                          >
                            {doctor.nome}
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </>
            )}

            {isLoadingPatients ? (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            ) : (
              <>
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="Selecione o paciente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pacientes</SelectLabel>

                      {dataPatients?.content.map(
                        (doctor: PatientsType, index: number) => (
                          <SelectItem
                            key={index}
                            value={doctor.id.toString()}
                          >
                            {doctor.nome}
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </>
            )}

            <DialogFooter>
              <Button type="submit">Marcar consulta</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
