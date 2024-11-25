import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RideService } from './ride.service';
import { RideConfirmDto, RideEstimateDto } from './dto/ride.dto';
import { basicRidesValidade } from './utils';

@Controller('ride')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Get(':customer_id')
  async listRidesByUser(
    @Param('customer_id') customerId: string,
    @Query('driver_id') driverId?: number,
  ) {
    if (!customerId) {
      throw new HttpException(
        'O ID do usuário não pode estar em branco.',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (driverId) {
      const isValidDriver = await this.rideService.validateDriverId(driverId);
      if (!isValidDriver) {
        throw new HttpException(
          {
            error_code: 'INVALID_DRIVER',
            error_description: 'Motorista invalido',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const serviceReturn = await this.rideService.findRidesByUser(
      customerId,
      driverId,
    );

    return {
      serviceReturn,
    };
  }

  @Post('estimate')
  @HttpCode(HttpStatus.OK)
  estimate(@Body() ride: RideEstimateDto) {
    basicRidesValidade(ride);
    return this.rideService.estimate(ride);
  }

  @Patch('confirm')
  async confirm(@Body() ride: RideConfirmDto) {
    basicRidesValidade(ride);
    await this.rideService.confirm(ride);
    return {
      success: true,
    };
  }
}
