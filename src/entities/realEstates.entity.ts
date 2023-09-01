import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entity";
import Category from "./categories.entity";
import Address from "./addresses.entity";

@Entity("realEstates")
class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: string | number;

    @Column()
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @OneToMany(() => Schedule, (s) => s.realEstate)
    schedules: Array<Schedule>;

    @OneToOne(() => Address, (a) => a.realEstate)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (c) => c.realEstate)
    category: Category
}

export default RealEstate