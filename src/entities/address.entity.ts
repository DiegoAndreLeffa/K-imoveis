import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { RealEstate } from "./realEstate.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 6, type: "varchar", nullable: true })
  number?: string | undefined | null;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @OneToOne(() => RealEstate, {
    nullable: false,
  })
  realEstate: RealEstate;
}

export { Address };
