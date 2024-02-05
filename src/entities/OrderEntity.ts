import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @Column()
  quantity: number;

  @Column()
  customerName: string;

  @Column()
  customerAddress: string;

  @Column()
  customerCity: string;

  @Column()
  customerState: string;

  @Column()
  customerZipcode: string;

  @Column()
  customerCountry: string;

  @Column()
  pharmacyid: number;

}
