import { Location } from "./estimate";

export interface RideEstimate {
  customer_id: string;
  origin: string;
  destination: string;
}

export interface MapsData {
  origin: Location;
  destination: Location;
  polyline: string;
}

export interface StaticMapProps {
  data: MapsData;
}
