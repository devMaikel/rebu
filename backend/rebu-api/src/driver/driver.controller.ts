import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverDto } from './dto/driver.dto';
import { DriverService } from './driver.service';

@Controller('driver')
export class DriverController {

    constructor(private readonly driverService: DriverService){}

    @Post()
    create(@Body() driver: DriverDto) {
        console.log(driver)
        this.driverService.create(driver)
    }

    @Get()
    findAll() {
        return this.driverService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.driverService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: DriverDto) {
        return this.driverService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.driverService.remove(+id);
    }
}
