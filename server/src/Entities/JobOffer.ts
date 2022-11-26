import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Company } from "./Company";
import { ApplyJob } from './ApplyJob';


@Entity()
export class JobOffer extends BaseEntity {

    @PrimaryGeneratedColumn()   
    idOffer!: number;

    @Column()
    nameOffer!: String;

    @Column()
    offerStartDate!: String;

    @Column()
    offerEndDate!: String;

    @Column()
    stateActive!: boolean;

    @Column()
    ratePerHour!: String;

    @Column()
    tools!: String;

    @Column()
    disciplines!: String;

    @Column()
    jobDescription!: String;

    @Column()
    jobType!: String;

    @ManyToOne(() => Company, (company) => company.idCompany)
    company!: Company
    
    @OneToMany(() => ApplyJob, (applyJob) => applyJob.idJobOffer)
    applyJob!: ApplyJob[]
}