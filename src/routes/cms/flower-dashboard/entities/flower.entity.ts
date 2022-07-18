import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, Unique, JoinColumn, OneToOne } from 'typeorm';




@Entity({ name: 'Flower' })
export class Flower {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "varchar", length: 2000 })
    title: string;

    @Column({ type: "varchar", length: 100 })
    avaUrl: string;

    @Column({ type: "varchar", length: 4000 })
    imageList: string;

    @Column({ type: "integer" })
    currentPrice: number;

    @Column({ type: "integer" })
    oldPrice: number;

    @Column({ type: "varchar", length: 50 })
    category: string;

    @Column({ type: "varchar", length: 100 })
    typeId: string;

    @Column({ type: "varchar", length: 4000 })
    description: string;


    @Column({ type: "varchar", length: 50 })
    status: string;

    @Column({ type: "date" })
    createdDate: Date;

    @Column({ type: "varchar", length: 50 })
    createdBy: string;

    @Column({ type: "date" })
    updatedDate: Date;

    @Column({ type: "varchar", length: 50 })
    updatedBy: string;
}
