import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";

export type MedicinesType = {
  descricao: string;
  resumoMedicamento: string;
  numeroRegistro: string;
  estoque: number;
  dosagem: string;
  tipoRemedio: string;
};

export const columns: ColumnDef<MedicinesType>[] = [
  {
    accessorKey: "descricao",
    header: ({ column }) => {
      <DataTableColumnHeader
        column={column}
        title="descricao"
      />;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Descrição
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "resumoMedicamento",
    header: ({ column }) => {
      <DataTableColumnHeader
        column={column}
        title="resumoMedicamento"
      />;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Resumo medicamento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <p className="line-clamp-2">
        {row.original.resumoMedicamento }
      </p>
    ),
  },
  {
    accessorKey: "tipoRemedio",
    header: ({ column }) => {
      <DataTableColumnHeader
        column={column}
        title="tipoRemedio"
      />;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo remedio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "dosagem",
    header: ({ column }) => {
      <DataTableColumnHeader
        column={column}
        title="dosagem"
      />;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          dosagem
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "estoque",
    header: ({ column }) => {
      <DataTableColumnHeader
        column={column}
        title="estoque"
      />;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estoque
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Badge
        variant={"outline"}
        className={`border text-white ${
          row.original.estoque >= 20 ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {row.original.estoque}
      </Badge>
    ),
  },

  {
    accessorKey: "numeroRegistro",
    header: ({ column }) => {
      <DataTableColumnHeader
        column={column}
        title="numero_registro"
      />;
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Numero do registro
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
