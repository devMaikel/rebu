import { RideEstimate } from "../types";

export const fetchEstimate = async (body: RideEstimate) => {
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

    const data = await response.json();
    console.log("retorno aqui: ", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar estimativa:", error);
    throw error;
  }
};
