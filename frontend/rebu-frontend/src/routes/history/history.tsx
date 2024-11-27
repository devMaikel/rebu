import { useState } from "react";
import "./history.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchListRides } from "../../service/requests";
import { formatDate } from "../../utils/dateUtils";

export default function History() {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const [userId, setUserId] = useState<string | undefined>(customerId);
  const [driver, setDriver] = useState<string>("all");
  const [rideList, setRideList] = useState<Ride[]>([]);

  const handleFilter = async (): Promise<void> => {
    if (userId == "" || undefined) {
      Swal.fire({
        icon: "error",
        title: "ID não informado",
        text: `Favor preencher o campo "ID do usuário"`,
        footer: "O ID do usuário é obrigatório para realizar a busca",
      });
    }
    if (typeof userId == "string") {
      const userAndDriver: UserAndDriver = { userId: userId, driverId: driver };
      const rideList: RidesList | string = await fetchListRides(userAndDriver);
      if (typeof rideList == "string") {
        Swal.fire({
          icon: "error",
          title: rideList,
        });
        setRideList([]);
        return;
      }
      setRideList(rideList.rides);
    }
  };

  return (
    <div className="historyDiv">
      <div className="container">
        <h1 className="title">Histórico de Viagens</h1>

        <div className="form">
          <label className="label">
            ID do Usuário:
            <input
              type="text"
              placeholder="Digite o ID do usuário"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="input"
            />
          </label>

          <label className="label">
            Motorista:
            <select
              value={driver}
              onChange={(e) => setDriver(e.target.value)}
              className="select"
            >
              <option value="all">Mostrar Todos</option>
              <option value="1">Homer Simpson</option>
              <option value="2">Dominic Toretto</option>
              <option value="3">James Bond</option>
            </select>
          </label>

          <button onClick={handleFilter} className="button">
            Aplicar Filtro
          </button>
        </div>
      </div>
      {rideList.length > 0 && (
        <div className="ride-list-container">
          <h1 className="title">Histórico de Viagens</h1>
          {rideList.length === 0 ? (
            <p className="no-data">Nenhuma viagem encontrada.</p>
          ) : (
            <table className="ride-table">
              <thead>
                <tr>
                  <th>Data e Hora</th>
                  <th>Motorista</th>
                  <th>Origem</th>
                  <th>Destino</th>
                  <th>Distância</th>
                  <th>Tempo</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {rideList.map((ride) => (
                  <tr key={ride.id}>
                    <td>
                      {typeof ride.date == "string" && formatDate(ride.date)}
                    </td>
                    <td>{ride.driver.name}</td>
                    <td>{ride.origin}</td>
                    <td>{ride.destination}</td>
                    <td>{(ride.distance / 1000).toFixed(2)} km</td>
                    <td>{ride.duration}</td>
                    <td>R$ {ride.value.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button
            onClick={() => {
              navigate(`/`);
            }}
          >
            Nova viagem
          </button>
        </div>
      )}
    </div>
  );
}
