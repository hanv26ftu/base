import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, Unique, JoinColumn, OneToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { MobileUser } from '../../auth-mobile/entities/userMobile.entity';


@Entity({ name: 'Address' })
export class Address {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "varchar", length: 100 })
    userId: string;

    @Column({ type: "varchar", length: 100 })
    provinceId: string;

    @Column({ type: "varchar", length: 100 })
    fullName: string;

    @Column({ type: "varchar", length: 50 })
    phone: string;

    @Column({ type: "varchar", length: 4000 })
    address: string;

   
}
