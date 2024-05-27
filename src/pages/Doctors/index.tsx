import { Loader } from "@/components/loader";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQueryDoctors } from "@/hooks/useQueryDoctors";

function Doctors() {
  const {dataDoctors, isLoadingDoctors } = useQueryDoctors();

  if (isLoadingDoctors) return <Loader />;

  if (!dataDoctors) return <div>Erro ao carregar dados.</div>;

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={dataDoctors.content} />
    </div>
  );
}

export default Doctors;
