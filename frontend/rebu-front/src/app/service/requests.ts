import { RideEstimate } from "../types";
import { EstimateResponse } from "../types/estimate";

const estimateMock: EstimateResponse = {
  origin: {
    latitude: -5.816472,
    longitude: -35.2335227,
  },
  destination: {
    latitude: -5.8171165,
    longitude: -35.2256383,
  },
  distance: 1597,
  duration: "4 minutos e 33 segundos",
  options: [
    {
      id: 1,
      name: "Homer Simpson",
      description:
        "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio.",
      car: "Plymouth Valiant 1973 rosa e enferrujado",
      rating: 2,
      review:
        "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
      price_km: "2.50",
      minimum_km: "1.00",
      value: "3.99",
    },
  ],
  routeResponse: {
    routes: [
      {
        legs: [
          {
            steps: [
              {
                distanceMeters: 1105,
                staticDuration: {
                  seconds: "179",
                  nanos: 0,
                },
                polyline: {
                  encodedPolyline:
                    "|_ob@np`vEb@aBx@wCRy@n@_CBMf@oBt@qC~AaGBKlAuEb@_BHKHW^mApA{E@ABKAACEh@yAZqAHq@",
                  polylineType: "encodedPolyline",
                },
                startLocation: {
                  latLng: {
                    latitude: -5.816472,
                    longitude: -35.2335227,
                  },
                  heading: null,
                },
                endLocation: {
                  latLng: {
                    latitude: -5.81991,
                    longitude: -35.2241858,
                  },
                  heading: null,
                },
                navigationInstruction: {
                  maneuver: "DEPART",
                  instructions:
                    "Head east on Av. Lima e Silva toward R. Ari Barroso\nGo through 1 roundabout",
                },
                travelAdvisory: null,
                localizedValues: {
                  distance: {
                    text: "0.7 mi",
                    languageCode: "",
                  },
                  staticDuration: {
                    text: "3 mins",
                    languageCode: "",
                  },
                },
                transitDetails: null,
                travelMode: "DRIVE",
              },
              {
                distanceMeters: 232,
                staticDuration: {
                  seconds: "62",
                  nanos: 0,
                },
                polyline: {
                  encodedPolyline: "luob@dv~uEcA_@}@UiBe@yCw@",
                  polylineType: "encodedPolyline",
                },
                startLocation: {
                  latLng: {
                    latitude: -5.81991,
                    longitude: -35.2241858,
                  },
                  heading: null,
                },
                endLocation: {
                  latLng: {
                    latitude: -5.8179571999999995,
                    longitude: -35.223448399999995,
                  },
                  heading: null,
                },
                navigationInstruction: {
                  maneuver: "TURN_LEFT",
                  instructions: "Turn left onto R. Raimundo Juvino de Oliveira",
                },
                travelAdvisory: null,
                localizedValues: {
                  distance: {
                    text: "0.1 mi",
                    languageCode: "",
                  },
                  staticDuration: {
                    text: "1 min",
                    languageCode: "",
                  },
                },
                transitDetails: null,
                travelMode: "DRIVE",
              },
              {
                distanceMeters: 260,
                staticDuration: {
                  seconds: "42",
                  nanos: 0,
                },
                polyline: {
                  encodedPolyline: "fiob@pq~uE]hA_A`Do@|BYjA",
                  polylineType: "encodedPolyline",
                },
                startLocation: {
                  latLng: {
                    latitude: -5.8179571999999995,
                    longitude: -35.223448399999995,
                  },
                  heading: null,
                },
                endLocation: {
                  latLng: {
                    latitude: -5.8171165,
                    longitude: -35.2256383,
                  },
                  heading: null,
                },
                navigationInstruction: {
                  maneuver: "TURN_LEFT",
                  instructions:
                    "Turn left onto Av. Miguel Castro\nPass by Izabely Luz Espaço De Beleza (on the right)\nDestination will be on the right",
                },
                travelAdvisory: null,
                localizedValues: {
                  distance: {
                    text: "0.2 mi",
                    languageCode: "",
                  },
                  staticDuration: {
                    text: "1 min",
                    languageCode: "",
                  },
                },
                transitDetails: null,
                travelMode: "DRIVE",
              },
            ],
            distanceMeters: 1597,
            duration: {
              seconds: "273",
              nanos: 0,
            },
            staticDuration: {
              seconds: "283",
              nanos: 0,
            },
            polyline: {
              encodedPolyline:
                "|_ob@np`vEb@aBx@wCRy@n@_CBMf@oBt@qC~AaGBKlAuEb@_BHKHW^mApA{E@ABKAACEh@yAZqAHq@cA_@}@UiBe@yCw@]hA_A`Do@|BYjA",
              polylineType: "encodedPolyline",
            },
            startLocation: {
              latLng: {
                latitude: -5.816472,
                longitude: -35.2335227,
              },
              heading: null,
            },
            endLocation: {
              latLng: {
                latitude: -5.8171165,
                longitude: -35.2256383,
              },
              heading: null,
            },
            travelAdvisory: null,
            localizedValues: {
              distance: {
                text: "1.0 mi",
                languageCode: "",
              },
              duration: {
                text: "5 mins",
                languageCode: "",
              },
              staticDuration: {
                text: "5 mins",
                languageCode: "",
              },
            },
            stepsOverview: null,
          },
        ],
        warnings: [],
        optimizedIntermediateWaypointIndex: [],
        routeLabels: ["DEFAULT_ROUTE"],
        distanceMeters: 1597,
        duration: {
          seconds: "273",
          nanos: 0,
        },
        staticDuration: {
          seconds: "282",
          nanos: 0,
        },
        polyline: {
          encodedPolyline:
            "|_ob@np`vEb@aBx@wCRy@n@_CBMf@oBt@qC~AaGBKlAuEb@_BHKHW^mApA{E@ABKAACEh@yAZqAHq@cA_@}@UiBe@yCw@]hA_A`Do@|BYjA",
          polylineType: "encodedPolyline",
        },
        description: "Av. Lima e Silva",
        viewport: {
          low: {
            latitude: -5.81991,
            longitude: -35.2335227,
          },
          high: {
            latitude: -5.816472,
            longitude: -35.223448399999995,
          },
        },
        travelAdvisory: {
          speedReadingIntervals: [],
          tollInfo: null,
          fuelConsumptionMicroliters: "0",
          routeRestrictionsPartiallyIgnored: false,
          transitFare: null,
        },
        localizedValues: {
          distance: {
            text: "1.0 mi",
            languageCode: "",
          },
          duration: {
            text: "5 mins",
            languageCode: "",
          },
          staticDuration: {
            text: "5 mins",
            languageCode: "",
          },
          transitFare: null,
        },
        routeToken:
          "CtIBCmYyZBpJChQCFgQYwUHyP50CspIchZ4ZhasJABIQFf82WSbMnayeAsroPisw_RoEAAIefioEJQFibD0okZc-Re6KEz9I-rKj7a3q-Y2fASIXUXhoR1pfUG9IYm0teTlZUG84VEotUXcQBRpPCk0KGAoNCgIIAREAAAAAAIBmQBGkcD0K18FyQBISCAAQAxAGEBMQEhgCQgQaAggFIhsKF1F4aEdaOWE0SGJtLXk5WVBvOFRKLVF3cAEoASIVAACBmRYyJOgAdfAU4wVaYEAA4q0eGhgKCg0Qeoj8FYXK_-oSCg3Cd4j8FajJ_-o",
      },
    ],
    fallbackInfo: null,
    geocodingResults: {
      intermediates: [],
      origin: {
        type: ["street_address"],
        geocoderStatus: {
          details: [],
          code: 0,
          message: "",
        },
        partialMatch: false,
        placeId: "ChIJX2Io00ZVsgcRmYY6Y4QvQUI",
      },
      destination: {
        type: ["premise"],
        geocoderStatus: {
          details: [],
          code: 0,
          message: "",
        },
        partialMatch: false,
        placeId: "ChIJUez2U1tVsgcR26aTUnMaZX4",
      },
    },
  },
};

export const fetchEstimate = async (
  body: RideEstimate
): Promise<EstimateResponse> => {
  console.log(body);
  return estimateMock;
  //   try {
  //     const response = await fetch("http://localhost:8080/ride/estimate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data: EstimateResponse = await response.json();
  //     console.log("retorno fetchEstimate aqui: ", data);
  //     return data;
  //   } catch (error) {
  //     console.error("Erro ao buscar estimativa:", error);
  //     throw error;
  //   }
};
