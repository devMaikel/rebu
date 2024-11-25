import { IsJSON, IsNumber, IsString } from "class-validator";

export class RideEstimateDto {

    @IsString()
    customer_id: string;

    @IsString()
    origin: string;

    @IsString()
    destination: string;
}

export class RideConfirmDto {

    @IsString()
    customer_id: string;

    @IsString()
    origin: string;

    @IsString()
    destination: string;

    @IsNumber()
    distance: number;

    @IsString()
    duration: string;

    @IsJSON()
    driver: {
        id: number;
        name: string
    };

    @IsNumber()
    value: number
}

class LatLng {
    latitude: number;
    longitude: number;
};

class Location {
    latLng: LatLng;
};

class RouteLeg {
    startLocation: Location;
    endLocation: Location;
};

class Duration {
    seconds: string;
    nanos: number;
}

export class RouteApiResponse {
    legs: RouteLeg[];
    distanceMeters: number;
    duration: Duration; 
};
