import { BaseEntity, Entity, Column, PrimaryGeneratedColumn,  OneToMany } from "typeorm"
import { JobOffer } from "./JobOffer";


@Entity()
export class Company extends BaseEntity{

    @PrimaryGeneratedColumn()
    idCompany!: number;

    @Column()
    nameCompany!: String;

    @Column()
    description!: String;

    @OneToMany(() => JobOffer, (jobOffer) => jobOffer.idOffer)
    idsOffers!: JobOffer[]
}