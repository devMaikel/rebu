interface DriverIdName {
    id: number;
    name: string;
  }
  
  interface Ride {
    id: number;
    customer_id: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    value: number;
    driver: DriverIdName;
  }
  
  interface ServiceReturn {
    customer_id: string;
    rides: Ride[];
  }
  
  interface RidesList {
    serviceReturn: ServiceReturn;
  }
  