export class RideEstimateDto {
  customer_id: string;

  origin: string;

  destination: string;
}

export class RideConfirmDto {
  customer_id: string;

  origin: string;

  destination: string;

  distance: number;

  duration: string;

  driver: {
    id: number;
    name: string;
  };

  value: number;
}

class LatLng {
  latitude: number;
  longitude: number;
}

class Location {
  latLng: LatLng;
}

class RouteLeg {
  startLocation: Location;
  endLocation: Location;
}

class Duration {
  seconds: string;
  nanos: number;
}

export class RideData {
  legs: RouteLeg[];
  distanceMeters: number;
  duration: Duration;
}
