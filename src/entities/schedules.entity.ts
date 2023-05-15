import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (real_estate) => real_estate.schedules, {
    nullable: false,
  })
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.schedules, {
    nullable: false,
  })
  user: User;
  static realEstate: any;
}

export { Schedule };
