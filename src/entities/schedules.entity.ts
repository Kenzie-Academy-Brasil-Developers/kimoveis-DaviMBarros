import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";

@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "date" })
    date: string;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => RealEstate, (re) => re.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User, (u) => u.schedules)
    user: User;
}

export default Schedule