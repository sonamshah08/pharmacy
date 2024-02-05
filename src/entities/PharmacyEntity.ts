import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import { ProductEntity } from './ProductEntity';

@Entity()
export class PharmacyEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255, nullable: false })
    integrationName: string

    @Column({ length: 255, nullable: false })
    name: string

    @Column({ length: 255, nullable: false })
    address: string

    @Column({ length: 255, nullable: false })
    city: string

    @Column({ length: 255, nullable: false })
    state: string

    @Column({ length: 255, nullable: false })
    zipcode: string

    @Column({ length: 255, nullable: false })
    country: string

    @Column({ length: 255, nullable: false })
    fax: string

    @Column({ length: 255, nullable: false })
    phone: string

    @OneToMany(() => ProductEntity, product => product.pharmacy)
    products: ProductEntity[];
}
