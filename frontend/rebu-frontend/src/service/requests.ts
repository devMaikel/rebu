import { RideEstimate } from "../types";
import { EstimateResponse } from "../types/estimate";

const estMock: EstimateResponse = {

  "origin": {
      "latitude": -5.8146043,
      "longitude": -35.2385242
  },
  "destination": {
      "latitude": -5.8171165,
      "longitude": -35.2256383
  },
  "distance": 2188,
  "duration": "4 minutos e 58 segundos",
  "options": [
      {
          "id": 1,
          "name": "Homer Simpson",
          "description": "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio.",
          "car": "Plymouth Valiant 1973 rosa e enferrujado",
          "rating": 2,
          "review": "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
          "price_km": "2.50",
          "minimum_km": "1.00",
          "value": "5.47"
      }
  ],
  "routeResponse": {
      "routes": [
          {
              "legs": [
                  {
                      "steps": [
                          {
                              "distanceMeters": 1696,
                              "staticDuration": {
                                  "seconds": "276",
                                  "nanos": 0
                              },
                              "polyline": {
                                  "encodedPolyline": "ftnb@voavENi@FOd@iBFU@G@MFUj@iBNe@XaAf@iBl@}BzAyFDMDUr@kCx@wCRy@n@_CBMf@oBt@qC~AaGBKlAuEb@_BHKHW^mApA{E@ABKAACEh@yAZqAHq@",
                                  "polylineType": "encodedPolyline"
                              },
                              "startLocation": {
                                  "latLng": {
                                      "latitude": -5.8146043,
                                      "longitude": -35.2385242
                                  },
                                  "heading": null
                              },
                              "endLocation": {
                                  "latLng": {
                                      "latitude": -5.81991,
                                      "longitude": -35.2241858
                                  },
                                  "heading": null
                              },
                              "navigationInstruction": {
                                  "maneuver": "DEPART",
                                  "instructions": "Head east on Av. Lima e Silva toward Tv. Lima e Silva\nGo through 1 roundabout\nPass by the pharmacy (on the right in 0.2 mi)"
                              },
                              "travelAdvisory": null,
                              "localizedValues": {
                                  "distance": {
                                      "text": "1.1 mi",
                                      "languageCode": ""
                                  },
                                  "staticDuration": {
                                      "text": "5 mins",
                                      "languageCode": ""
                                  }
                              },
                              "transitDetails": null,
                              "travelMode": "DRIVE"
                          },
                          {
                              "distanceMeters": 232,
                              "staticDuration": {
                                  "seconds": "61",
                                  "nanos": 0
                              },
                              "polyline": {
                                  "encodedPolyline": "luob@dv~uEcA_@}@UiBe@yCw@",
                                  "polylineType": "encodedPolyline"
                              },
                              "startLocation": {
                                  "latLng": {
                                      "latitude": -5.81991,
                                      "longitude": -35.2241858
                                  },
                                  "heading": null
                              },
                              "endLocation": {
                                  "latLng": {
                                      "latitude": -5.8179571999999995,
                                      "longitude": -35.223448399999995
                                  },
                                  "heading": null
                              },
                              "navigationInstruction": {
                                  "maneuver": "TURN_LEFT",
                                  "instructions": "Turn left onto R. Raimundo Juvino de Oliveira"
                              },
                              "travelAdvisory": null,
                              "localizedValues": {
                                  "distance": {
                                      "text": "0.1 mi",
                                      "languageCode": ""
                                  },
                                  "staticDuration": {
                                      "text": "1 min",
                                      "languageCode": ""
                                  }
                              },
                              "transitDetails": null,
                              "travelMode": "DRIVE"
                          },
                          {
                              "distanceMeters": 260,
                              "staticDuration": {
                                  "seconds": "42",
                                  "nanos": 0
                              },
                              "polyline": {
                                  "encodedPolyline": "fiob@pq~uE]hA_A`Do@|BYjA",
                                  "polylineType": "encodedPolyline"
                              },
                              "startLocation": {
                                  "latLng": {
                                      "latitude": -5.8179571999999995,
                                      "longitude": -35.223448399999995
                                  },
                                  "heading": null
                              },
                              "endLocation": {
                                  "latLng": {
                                      "latitude": -5.8171165,
                                      "longitude": -35.2256383
                                  },
                                  "heading": null
                              },
                              "navigationInstruction": {
                                  "maneuver": "TURN_LEFT",
                                  "instructions": "Turn left onto Av. Miguel Castro\nPass by Izabely Luz Espaço De Beleza (on the right)\nDestination will be on the right"
                              },
                              "travelAdvisory": null,
                              "localizedValues": {
                                  "distance": {
                                      "text": "0.2 mi",
                                      "languageCode": ""
                                  },
                                  "staticDuration": {
                                      "text": "1 min",
                                      "languageCode": ""
                                  }
                              },
                              "transitDetails": null,
                              "travelMode": "DRIVE"
                          }
                      ],
                      "distanceMeters": 2188,
                      "duration": {
                          "seconds": "298",
                          "nanos": 0
                      },
                      "staticDuration": {
                          "seconds": "379",
                          "nanos": 0
                      },
                      "polyline": {
                          "encodedPolyline": "ftnb@voavENi@FOd@iBFU@G@MFUj@iBNe@XaAf@iBl@}BzAyFDMDUr@kCx@wCRy@n@_CBMf@oBt@qC~AaGBKlAuEb@_BHKHW^mApA{E@ABKAACEh@yAZqAHq@cA_@}@UiBe@yCw@]hA_A`Do@|BYjA",
                          "polylineType": "encodedPolyline"
                      },
                      "startLocation": {
                          "latLng": {
                              "latitude": -5.8146043,
                              "longitude": -35.2385242
                          },
                          "heading": null
                      },
                      "endLocation": {
                          "latLng": {
                              "latitude": -5.8171165,
                              "longitude": -35.2256383
                          },
                          "heading": null
                      },
                      "travelAdvisory": null,
                      "localizedValues": {
                          "distance": {
                              "text": "1.4 mi",
                              "languageCode": ""
                          },
                          "duration": {
                              "text": "5 mins",
                              "languageCode": ""
                          },
                          "staticDuration": {
                              "text": "6 mins",
                              "languageCode": ""
                          }
                      },
                      "stepsOverview": null
                  }
              ],
              "warnings": [],
              "optimizedIntermediateWaypointIndex": [],
              "routeLabels": [
                  "DEFAULT_ROUTE"
              ],
              "distanceMeters": 2188,
              "duration": {
                  "seconds": "298",
                  "nanos": 0
              },
              "staticDuration": {
                  "seconds": "379",
                  "nanos": 0
              },
              "polyline": {
                  "encodedPolyline": "ftnb@voavENi@FOd@iBFU@G@MFUj@iBNe@XaAf@iBl@}BzAyFDMDUr@kCx@wCRy@n@_CBMf@oBt@qC~AaGBKlAuEb@_BHKHW^mApA{E@ABKAACEh@yAZqAHq@cA_@}@UiBe@yCw@]hA_A`Do@|BYjA",
                  "polylineType": "encodedPolyline"
              },
              "description": "Av. Lima e Silva",
              "viewport": {
                  "low": {
                      "latitude": -5.81991,
                      "longitude": -35.2385242
                  },
                  "high": {
                      "latitude": -5.8146043,
                      "longitude": -35.223448399999995
                  }
              },
              "travelAdvisory": {
                  "speedReadingIntervals": [],
                  "tollInfo": null,
                  "fuelConsumptionMicroliters": "0",
                  "routeRestrictionsPartiallyIgnored": false,
                  "transitFare": null
              },
              "localizedValues": {
                  "distance": {
                      "text": "1.4 mi",
                      "languageCode": ""
                  },
                  "duration": {
                      "text": "5 mins",
                      "languageCode": ""
                  },
                  "staticDuration": {
                      "text": "6 mins",
                      "languageCode": ""
                  },
                  "transitFare": null
              },
              "routeToken": "CtIBCmYyZBpJChQCFgQYAG3nP50CtuxLkdBLhasJABIQGUHyESbMnayeAsroPisw_RoEAAIefioEJQFibD3d5Ro_Re6KEz9IjJCM35nVhZPPASIXT1o1R1o3Yk1FdHFxNnJRUDF2M3B1QUUQBRpPCk0KGAoNCgIIAREAAAAAAIBmQBEpXI_C9XB0QBISCAAQAxAGEBMQEhgCQgQaAggFIhsKF09aNUdaODZhRXRxcTZyUVAxdjNwdUFFcAEoASIVAACBmRaNSdSx3WSMM50b3Uh6nJaJGhgKCg0Fw4j8FSYH_-oSCg25wIj8FUMG_-o"
          }
      ],
      "fallbackInfo": null,
      "geocodingResults": {
          "intermediates": [],
          "origin": {
              "type": [
                  "premise"
              ],
              "geocoderStatus": {
                  "details": [],
                  "code": 0,
                  "message": ""
              },
              "partialMatch": false,
              "placeId": "ChIJwz197jhVsgcRYL-s0azFZd0"
          },
          "destination": {
              "type": [
                  "premise"
              ],
              "geocoderStatus": {
                  "details": [],
                  "code": 0,
                  "message": ""
              },
              "partialMatch": false,
              "placeId": "ChIJUez2U1tVsgcR26aTUnMaZX4"
          }
      }
  }
}


export const fetchEstimate = async (
  body: RideEstimate
): Promise<EstimateResponse> => {
  // console.log(body);
  // return estMock;
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
      console.log("retorno fetchEstimate aqui: ", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar estimativa:", error);
      throw error;
    }
};

export const fetchListRides = async (userId: string): Promise<RidesList> => {
  try {
      const response = await fetch(`http://localhost:8080/ride/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: RidesList = await response.json();
      console.log("retorno fetchEstimate aqui: ", data);
      return data;
  } catch (error) {
      console.error("Erro ao buscar estimativa:", error);
      throw error;
  }
}

export const fetchRideConfirm = async (rideConfirmBody: RideConfirmBody): Promise<boolean> => {
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
      return true
    }
    return false
  } catch (error) {
      console.error("Erro ao confirmar corrida:", error);
      throw error;
  }
}
