import { ButtonLoading } from "@/components/button-loading";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNewMedicines } from "@/hooks/useNewMedicines";

export function NewMedicine() {
  const { form, onSubmit, isLoading } = useNewMedicines();

  return (
    <div className="px-0 flex m-auto w-full md:w-fit">
      <Card className="w-full md:w-[1024px] border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl">Novo medicamento</CardTitle>
          <CardDescription>Cadastro de um novo medicamento.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Ibuprofeno"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Descrição do remédio.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resumoMedicamento"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Resumo médico</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Ibuprofeno é um remédio..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Resumo médico do remédio.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <FormField
                  control={form.control}
                  name="numero_registro"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Número do registro</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ex: 1234567890123"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Número de registro do remédio (13 dígitos).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="estoque"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Estoque</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Ex: 29"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormDescription>Quantidade em estoque.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <FormField
                  control={form.control}
                  name="dosagem"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Dosagem</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a dosagem do remédio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="MILILITROS">Mililitros</SelectItem>
                          <SelectItem value="MICROGRAMAS">
                            Microgramas
                          </SelectItem>
                          <SelectItem value="MILIGRAMAS">Miligramas</SelectItem>
                          <SelectItem value="GRAMAS">Gramas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Dosagem do remédio.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipo_remedio"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Tipo do remédio</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo do remédio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ANALGESICO">Analgésico</SelectItem>
                          <SelectItem value="ANTI_INFLAMATORIO">
                            Anti-inflamatório
                          </SelectItem>
                          <SelectItem value="ANTIBIOTICO">
                            Antibiótico
                          </SelectItem>
                          <SelectItem value="ANTI_HISTAMINICO">
                            Anti-histamínico
                          </SelectItem>
                          <SelectItem value="ANTITUSSICO">
                            Antitússico
                          </SelectItem>
                          <SelectItem value="ANTIFUNGICO">
                            Antifúngico
                          </SelectItem>
                          <SelectItem value="ANTIEMETICO">
                            Antiemético
                          </SelectItem>
                          <SelectItem value="LAXANTE">Laxante</SelectItem>
                          <SelectItem value="DIURETICO">Diurético</SelectItem>
                          <SelectItem value="SUPLEMENTO_VITAMINICO">
                            Suplemento vitamínico
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Tipo do remédio.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {isLoading ? (
                <ButtonLoading className="w-full sm:w-fit" text="Carregando" />
              ) : (
                <Button type="submit" className="w-full sm:w-fit">Cadastrar remédio</Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
