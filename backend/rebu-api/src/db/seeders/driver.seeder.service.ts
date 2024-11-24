import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from '../../driver/entities/driver.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(DriverEntity)
    private readonly driverRepository: Repository<DriverEntity>,
  ) {}

  async seedDrivers() {
    console.log("Iniciando seed de drivers . . .")
    const drivers = [
      {
        name: 'Homer Simpson',
        description: 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio.',
        car: 'Plymouth Valiant 1973 rosa e enferrujado',
        rating: 2,
        review: 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
        price_km: 2.5,
        minimum_km: 1,
      },
      {
        name: 'Dominic Toretto',
        description: 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez.',
        car: 'Dodge Charger R/T 1970 modificado',
        rating: 4,
        review: 'Que viagem incrível! O carro é um show à parte e o motorista foi super gente boa.',
        price_km: 5.0,
        minimum_km: 5,
      },
      {
        name: 'James Bond',
        description: 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto.',
        car: 'Aston Martin DB5 clássico',
        rating: 5,
        review:'Serviço impecável! Uma experiência digna de um agente secreto.',
        price_km: 10.0,
        minimum_km: 10,
      },
    ];

    for (const driver of drivers) {
      const existing = await this.driverRepository.findOneBy({ name: driver.name });
      if (!existing) {
        await this.driverRepository.save(driver);
      }
    }

    console.log('Seeders for drivers completed.');
  }
}
