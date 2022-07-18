import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, Unique, JoinColumn, OneToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity({ name: 'DashboardUser' })
export class DashboardUser {
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

  
}
