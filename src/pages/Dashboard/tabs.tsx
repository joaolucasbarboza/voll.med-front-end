import { format, parseISO } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Types, useQueryWeek } from "@/hooks/useQueryWeek";
import { Key } from "react";
import { useQueryMonth } from "@/hooks/useQueryMonth";
import { useQueryToday } from "@/hooks/useQueryToday";

export function TabsDashboard() {
  const { dataQueryWeek } = useQueryWeek();
  const { dataQueryMonth } = useQueryMonth();
  const { dataQueryToday } = useQueryToday();

  return (
    <Tabs defaultValue="today">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="today">Hoje</TabsTrigger>
          <TabsTrigger value="week">Está semana</TabsTrigger>
          <TabsTrigger value="month">Este mês</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="today">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Consultas hoje</CardTitle>
            <CardDescription>Ordenados pela data.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead className="hidden sm:table-cell">Valor</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Forma de pagamento
                  </TableHead>
                  <TableHead className="text-right">Medico</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataQueryToday?.map((query: Types, index: Key) => (
                  <TableRow key={index}>
                    <TableCell >
                      <div className="font-medium">{query.usuario.nome}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {query.usuario.cpf}
                      </div>
                    </TableCell>

                    
                    <TableCell className="hidden sm:table-cell">
                      {query.valor == null ? (
                        "Valor não definido"
                      ) : (
                        <div className="flex">
                          <p>R$</p>
                          {query.valor}
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="hidden md:table-cell">
                      {query.formaPagamento}
                    </TableCell>


                    <TableCell className="text-right">
                      <div className="font-medium">{query.medico.nome}</div>

                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {query.medico.especialidade}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Consultas está semana</CardTitle>
            <CardDescription>Ordenados pela data.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead className="hidden sm:table-cell">Medico</TableHead>
                  <TableHead className="hidden sm:table-cell">Valor</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Forma de pagamento
                  </TableHead>
                  <TableHead className="text-right">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataQueryWeek?.map((query: Types, index: Key) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{query.usuario.nome}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {query.usuario.cpf}
                      </div>
                    </TableCell>

                    <TableCell className="hidden sm:table-cell">
                      <div className="font-medium">{query.medico.nome}</div>

                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {query.medico.especialidade}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {query.valor == null ? (
                        "Valor não definido"
                      ) : (
                        <div className="flex">
                          <p>R$</p>
                          {query.valor}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {query.formaPagamento}
                    </TableCell>
                    <TableCell className="text-right">
                      {format(parseISO(query.data), "dd/MM/yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="month">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Consultas este mês</CardTitle>
            <CardDescription>Ordenados pela data.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paciente</TableHead>
                  <TableHead className="hidden sm:table-cell">Medico</TableHead>
                  <TableHead className="hidden sm:table-cell">Valor</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Forma de pagamento
                  </TableHead>
                  <TableHead className="text-right">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataQueryMonth?.map((query: Types, index: Key) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{query.usuario.nome}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {query.usuario.cpf}
                      </div>
                    </TableCell>

                    <TableCell className="hidden sm:table-cell">
                      <div className="font-medium">{query.medico.nome}</div>

                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {query.medico.especialidade}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {query.valor == null ? (
                        "Valor não definido"
                      ) : (
                        <div className="flex">
                          <p>R$</p>
                          {query.valor}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {query.formaPagamento}
                    </TableCell>
                    <TableCell className="text-right">
                      {format(parseISO(query.data), "dd/MM/yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
