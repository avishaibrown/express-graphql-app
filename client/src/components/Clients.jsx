import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  return loading ? (
    <Spinner />
  ) : error ? (
    <div>Error</div>
  ) : (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.clients.length > 0 ? (
          data.clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))
        ) : (
          <p>No client data!</p>
        )}
      </tbody>
    </table>
  );
}
