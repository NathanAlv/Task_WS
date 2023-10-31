import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, type: 'float' }) 
  price: number;

  @Column({ nullable: false })
  quantity: number;


  @Column({ nullable: false })
  description: string;
}