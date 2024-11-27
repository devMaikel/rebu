import { RideEstimate } from "../types";
import { EstimateResponse } from "../types/estimate";

export const fetchEstimate = async (
  body: RideEstimate
): Promise<EstimateResponse> => {
  try {
    const response = await fetch("http://localhost:8080/ride/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: EstimateResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar estimativa:", error);
    throw error;
  }
};

export const fetchListRides = async (
  userAndDriver: UserAndDriver
): Promise<RidesList | string> => {
  try {
    const url =
      userAndDriver.driverId == "all"
        ? `http://localhost:8080/ride/${userAndDriver.userId}`
        : `http://localhost:8080/ride/${userAndDriver.userId}?driver_id=${userAndDriver.driverId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 404) {
      return "Nenhum registro encontrado";
    }
    if (response.status == 400) {
      return "Motorista inválido";
    }

    const data: RidesList = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar estimativa:", error);
    throw error;
  }
};

export const fetchRideConfirm = async (
  rideConfirmBody: RideConfirmBody
): Promise<boolean> => {
  try {
    const response = await fetch(`http://localhost:8080/ride/confirm`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rideConfirmBody),
    });

    const data: RideConfirmResponse = await response.json();
    if (data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erro ao confirmar corrida:", error);
    throw error;
  }
};
