interface RideConfirmBody {
  customer_id: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  driver: DriverIdName;
  value: number;
}

interface RideConfirmResponse {
  success: boolean;
}
