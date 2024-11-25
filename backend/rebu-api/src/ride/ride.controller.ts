import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideConfirmDto, RideEstimateDto } from './dto/ride.dto';

@Controller('ride')
export class RideController {
    constructor(private readonly rideService: RideService){}

    @Get(':customer_id')
    async listRidesByUser(
        @Param('customer_id') customerId: string,
        @Query('driver_id') driverId?: number,
    ) {
        if (!customerId) {
            throw new HttpException(
                'O ID do usuário não pode estar em branco.',
                HttpStatus.BAD_REQUEST,
            )
        }

        if (driverId) {
            const isValidDriver = await this.rideService.validateDriverId(driverId);
            if (!isValidDriver) {
                throw new HttpException(
                'O ID do motorista informado é inválido.',
                HttpStatus.BAD_REQUEST,
                )
            }
        }

        const serviceReturn = await this.rideService.findRidesByUser(customerId, driverId);

        return {
            message: 'Operação realizada com sucesso',
            data: serviceReturn
        }
    }

    @Post('estimate')
    estimate(@Body() ride: RideEstimateDto) {
        if(ride.destination == ride.origin) {
            throw new HttpException(`Os dados fornecidos no corpo da requisição são inválidos`, HttpStatus.BAD_REQUEST);
        }
        console.log(ride)
        return this.rideService.estimate(ride)
    }

    @Patch('confirm')
    async confirm(@Body() ride: RideConfirmDto) {
        await this.rideService.confirm(ride)
        return {
            success: true,
            message: 'Operação realizada com sucesso',
        }
    }
}
