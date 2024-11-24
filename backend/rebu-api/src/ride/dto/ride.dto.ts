import { IsJSON, IsNumber, IsString } from "class-validator";

export class RideEstimateDto {

    @IsString()
    customer_id: string;

    @IsString()
    origin: string;

    @IsString()
    destination: string;
}

export class RideCreateDto {

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
