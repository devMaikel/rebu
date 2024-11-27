import { useState } from "react";
import './home.css';
import { EstimateResponse, RideBasicsData } from "../../types/estimate";
import { fetchEstimate } from "../../service/requests";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
    const [userId, setUserId] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await Swal.fire({
            title: "Buscando motoristas",
            html: "Aguarde . . .",
            timer: 10000,
            timerProgressBar: true,
            didOpen: () => {
            Swal.showLoading();
            },
        });
        const rideBasics: RideBasicsData = {
            customer_id: userId,
            origin: origin,
            destination: destination
        }
        const data: EstimateResponse = await fetchEstimate(rideBasics);
        console.log("data: ", data);
        navigate("/rideoptions", {
            state: { data, rideBasics } as { data: EstimateResponse; rideBasics: RideBasicsData },
        });
    };
  
    return (
      <div className="page">
        <h1 className="title">Rebu Transportes</h1>
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