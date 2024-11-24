import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DriverEntity } from '../../driver/entities/driver.entity';

@Entity('rides')
export class RideEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id: string;

    @Column()
    origin: string;

    @Column()
    destination: string;

    @Column('float')
    distance: number;

    @Column()
    duration: string;

    @Column('float')
    value: number;

    @ManyToOne(() => DriverEntity, (driver) => driver.rides)
    driver: DriverEntity;
}
