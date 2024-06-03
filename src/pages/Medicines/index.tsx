import { Loader } from "@/components/loader";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQueryMedicines } from "@/hooks/useQueryMedicines";

function Medicines() {
  const { dataMedicines, isLoadingDoctors } = useQueryMedicines();

  if (isLoadingDoctors) return <Loader />;

  if (!dataMedicines)
    return <div className="m-auto h-screen">Erro ao carregar dados.</div>;

  return (
    <div className="container mx-auto p-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Medicamentos
      </h3>
      <DataTable
        columns={columns}
        data={dataMedicines.content}
      />
    </div>
  );
}

export default Medicines;
