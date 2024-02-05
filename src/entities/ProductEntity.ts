import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PharmacyEntity } from './PharmacyEntity';

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: false })
    integrationName: string

    @Column({ length: 255, nullable: false })
    name: string

    @Column()
    pharmacyId: number

    @ManyToOne(() => PharmacyEntity, pharmacy => pharmacy.products)
    @JoinColumn({ name: 'pharmacyId' })
    pharmacy: PharmacyEntity;
}
