import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { columns } from "./columns";
import { DataTable } from "./data-table";

function Medicines() {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/remedios");

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

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={responseData} />
    </div>
  );
}

export default Medicines;
