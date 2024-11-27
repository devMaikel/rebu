import { useState } from "react";
import "./home.css";
import { EstimateResponse, RideBasicsData } from "../../types/estimate";
import { fetchEstimate } from "../../service/requests";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [userId, setUserId] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const rideBasics: RideBasicsData = {
      customer_id: userId,
      origin: origin,
      destination: destination,
    };
    const data: EstimateResponse = await fetchEstimate(rideBasics);
    setIsLoading(false);
    navigate("/rideoptions", {
      state: { data, rideBasics } as {
        data: EstimateResponse;
        rideBasics: RideBasicsData;
      },
    });
  };
  return (
    <div className="page">
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Carregando, por favor aguarde...</p>
        </div>
      )}
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="labelDiv">
            <label htmlFor="userId" className="label">
              ID do Usuário:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="Digite o ID do usuário"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="labelDiv">
            <label htmlFor="origin" className="label">
              Endereço de Origem:
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              placeholder="Digite o endereço de origem"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>

          <div className="labelDiv">
            <label htmlFor="destination" className="label">
              Endereço de Destino:
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Digite o endereço de destino"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}
