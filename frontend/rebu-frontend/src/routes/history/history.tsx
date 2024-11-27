import { useState } from 'react';
import './history.css';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchListRides } from '../../service/requests';
  

export default function History() {
    const { customerId } = useParams();
    const [userId, setUserId] = useState<string | undefined>(customerId);
    const [driver, setDriver] = useState<string>("all");
    const [rideList, setRideList] = useState<Ride[]>([]);

    const handleFilter = async (): Promise<void> => {
        if(userId == "" || undefined) {
            Swal.fire({
                icon: "error",
                title: "ID não informado",
                text: `Favor preencher o campo "ID do usuário"`,
                footer: 'O ID do usuário é obrigatório para realizar a busca'
            });
        }
        if(typeof userId == "string") {
            const rideList: RidesList = await fetchListRides(userId);
            setRideList(rideList.serviceReturn.rides);
        }
        console.log("Filtrando histórico de viagens para:");
        console.log("Usuário ID:", userId || "Todos os usuários");
        console.log("Motorista:", driver === "all" ? "Todos os motoristas" : driver);
        // Adicione aqui a lógica para aplicar o filtro
    };

    return (
        <>
            { 
                rideList.length < 1 ? 
                (<div className="container">
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
                </div>) :
                (<div className="ride-list-container">
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
                              <td>{new Date().toLocaleString()}</td> {/* Atualize com a data/hora real */}
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
                  </div>)
            }
        </>
    );
}