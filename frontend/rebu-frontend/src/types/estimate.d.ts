export interface Location {
  latitude: number;
  longitude: number;
}

export interface Distance {
  text: string;
  languageCode: string;
}

export interface StaticDuration {
  seconds: string;
  nanos: number;
}

export interface LocalizedValues {
  distance: Distance;
  staticDuration: Distance;
}

export interface Polyline {
  encodedPolyline: string;
  polylineType: string;
}

export interface NavigationInstruction {
  maneuver: string;
  instructions: string;
}

export interface Step {
  distanceMeters: number;
  staticDuration: StaticDuration;
  polyline: Polyline;
  startLocation: {
    latLng: Location;
    heading: number | null;
  };
  endLocation: {
    latLng: Location;
    heading: number | null;
  };
  navigationInstruction: NavigationInstruction;
  travelAdvisory: null;
  localizedValues: LocalizedValues;
  transitDetails: null;
  travelMode: string;
}

export interface Leg {
  steps: Step[];
  distanceMeters: number;
  duration: StaticDuration;
  staticDuration: StaticDuration;
  polyline: Polyline;
  startLocation: {
    latLng: Location;
    heading: number | null;
  };
  endLocation: {
    latLng: Location;
    heading: number | null;
  };
  localizedValues: {
    distance: Distance;
    duration: Distance;
    staticDuration: Distance;
  };
}

export interface Route {
  legs: Leg[];
  distanceMeters: number;
  duration: StaticDuration;
  staticDuration: StaticDuration;
  polyline: Polyline;
  description: string;
  viewport: {
    low: Location;
    high: Location;
  };
}

export interface Driver {
  id: number;
  name: string;
  description: string;
  car: string;
  rating: number;
  review: string;
  price_km: string;
  minimum_km: string;
  value: string;
}

export interface RouteResponse {
  routes: Route[];
}

export interface EstimateResponse {
  origin: Location;
  destination: Location;
  distance: number;
  duration: string;
  options: Driver[];
  routeResponse: unknown;
}

export interface RideBasicsData {
  customer_id: string;
  origin: string;
  destination: string;
}
