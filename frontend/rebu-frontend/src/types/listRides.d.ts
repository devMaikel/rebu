interface DriverIdName {
  id: number;
  name: string;
}

interface Ride {
  id: number;
  customer_id: string;
  date?: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
  driver: DriverIdName;
}

interface RidesList {
  customer_id: string;
  rides: Ride[];
}

interface UserAndDriver {
  userId: string;
  driverId: string;
}
