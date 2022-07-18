import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, Unique, JoinColumn, OneToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity({ name: 'MobileUser' })
export class MobileUser {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "varchar", length: 100 })
    passWord: string;

    @Column({ type: "varchar", length: 100 })
    fullName: string;

    @Column({ type: "varchar", length: 50 })
    phone: string;

    @Column({ type: "varchar", length: 4000 })
    address: string;

    @Column({ type: "varchar", length: 100 })
    firebaseId: string;
}
