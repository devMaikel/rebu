import { Body, Controller, Get, HttpException, HttpStatus, Patch, Post } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideEstimateDto } from './dto/ride.dto';

@Controller('ride')
export class RideController {
    constructor(private readonly rideService: RideService){}

    // GET /ride/{customer_id}?driver_id={id do motorista} ->
    // @Get('/:customer_id/')
    // create(@Body() driver: DriverDto) {
    //     console.log(driver)
    //     this.riderService.create(driver)
    // }

    // post: /ride/estimate
    @Post('estimate')
    create(@Body() ride: RideEstimateDto) {
        if(ride.destination == ride.origin) {
            throw new HttpException(`Os dados fornecidos no corpo da requisição são inválidos`, HttpStatus.BAD_REQUEST);
        }
        console.log(ride)
        return this.rideService.estimate(ride)
    }

    // PATCH /ride/confirm
    // @Patch('confirm')
    // create(@Body() driver: DriverDto) {
    //     console.log(driver)
    //     this.riderService.create(driver)
    // }

    // retornar erro
    // throw new HttpException(`descricao do erro`, HttpStatus.NOT_FOUND);
    
}
