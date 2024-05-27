import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Loader } from "@/components/loader";

export function Patients() {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/pacientes");

        console.log(response.data.content);
        
        setResponseData(response.data.content);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={responseData} />
    </div>
  );
}
