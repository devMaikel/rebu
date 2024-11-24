import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RideEntity } from '../../ride/entities/ride.entity';

@Entity('drivers')
export class DriverEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column()
    car: string;

    @Column({ type: 'float' })
    rating: number;

    @Column({ type: 'text', nullable: true })
    review: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price_km: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    minimum_km: number;

    @OneToMany(() => RideEntity, (ride) => ride.driver)
    rides: RideEntity[];
}
