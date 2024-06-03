import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useNewQuery } from "@/hooks/useNewQuery";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useMethodPayment } from "../../hooks/useMethodPayment";
import { useSpecialty } from "../../hooks/useSpecialty";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQueryDoctors } from "@/hooks/useQueryDoctors";
import { useQueryPatients } from "@/hooks/useQueryPatients";

export function NewQuery() {
  const { specialty } = useSpecialty();
  const { methodPayment } = useMethodPayment();
  const { dataPatients } = useQueryPatients();
  const { dataDoctors } = useQueryDoctors();
  const { form, onSubmit } = useNewQuery();

  return (
    <div className="px-6 py-4 md:py-8 flex m-auto w-full md:w-fit">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Nova consulta
          </h3>
          {/* <Data /> */}
          <FormField
            control={form.control}
            name="idUsuario"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paciente</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl className="h-fit">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o paciente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dataPatients?.content.map((patient) => (
                      <SelectItem
                        key={patient.id}
                        value={patient.id.toString()}
                      >
                        <div className="flex flex-col items-start">
                          <p>{patient.nome}</p>
                          <span className="text-muted-foreground">
                            {patient.cpf} - {patient.email}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="idMedico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doutor</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl className="h-fit">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o doutor" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dataDoctors?.content.map((doctor) => (
                      <SelectItem
                        key={doctor.id}
                        value={doctor.id.toString()}
                      >
                        <div className="flex flex-col items-start">
                          <p>{doctor.nome}</p>
                          <span className="text-muted-foreground">
                            {doctor.especialidade}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="especialidade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Especialidade</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl className="h-fit">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a especialidade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {specialty.map((specialty) => (
                      <SelectItem
                        key={specialty.value}
                        value={specialty.value}
                      >
                        {specialty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="formaPagamento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Forma de pagamento</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o método de pagamento" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {methodPayment.map((method) => (
                      <SelectItem
                        key={method.value}
                        value={method.value}
                      >
                        {method.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">Agendar consulta</Button>
        </form>
      </Form>
    </div>
  );
}
