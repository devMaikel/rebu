import { useLocation, useNavigate } from "react-router-dom";
import "./rideOptions.css";
import { Driver, EstimateResponse, RideBasicsData } from "../../types/estimate";
import { fetchRideConfirm } from "../../service/requests";
import Swal from "sweetalert2";
import StaticMap from "../../components/staticMap";
import { MapsData } from "../../types";

export default function RideOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, rideBasics } = location.state as {
    data: EstimateResponse;
    rideBasics: RideBasicsData;
  };
  const drivers: Driver[] = data.options;
  const dataMaps: MapsData = {
    polyline: data.routeResponse.routes[0].legs[0].polyline.encodedPolyline,
    destination: data.destination,
    origin: data.origin,
  };

  const handleChooseDriver = async (
    driverId: number,
    driverName: string,
    value: number
  ) => {
    const rideConfirmBody: RideConfirmBody = {
      customer_id: rideBasics.customer_id,
      origin: rideBasics.origin,
      destination: rideBasics.destination,
      distance: data.distance,
      duration: data.duration,
      driver: {
        id: driverId,
        name: driverName,
      },
      value: value,
    };
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Confirmar viagem?",
        text: "Você não poderá mais desfazer a ação!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Voltar",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          callApiConfirmation(rideConfirmBody);
          swalWithBootstrapButtons.fire({
            title: "Viagem confirmada!",
            text: "Sua viagem foi confirmada com sucesso.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Viagem cancelada!",
            text: "Favor selecionar o motorista novamente.",
            icon: "error",
          });
        }
      });
  };

  const callApiConfirmation = async (rideConfirmBody: RideConfirmBody) => {
    try {
      const response = await fetchRideConfirm(rideConfirmBody);
      if (response) {
        navigate(`/history/${rideBasics.customer_id}`);
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao confirmar a viagem");
    }
  };

  return (
    <div>
      <h1>Escolha uma opção de motorista</h1>
      {drivers.length === 0 ? (
        <p>Nenhuma viagem disponível.</p>
      ) : (
        <ul>
          {drivers.map((driver) => (
            <li key={driver.id} className="driver-option">
              <div>
                <p>
                  <strong>Motorista:</strong> {driver.name}
                </p>
                <p>
                  <strong>Descrição:</strong> {driver.description}
                </p>
                <p>
                  <strong>Veículo:</strong> {driver.car}
                </p>
                <p>
                  <strong>Avaliação:</strong>{" "}
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < Math.round(driver.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Valor da Viagem:</strong> R$ {driver.value}
                </p>
                <button
                  onClick={() =>
                    handleChooseDriver(driver.id, driver.name, +driver.value)
                  }
                >
                  Escolher
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <StaticMap data={dataMaps} />
    </div>
  );
}
