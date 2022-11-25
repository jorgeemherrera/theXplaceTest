import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApplyJob } from './ApplyJob';

@Entity()
export class Applicant extends BaseEntity {

    @PrimaryGeneratedColumn()
    idApplicant!: number;

    @Column()
    nameApplicant!: String;

    @Column()
    lastName!: String;

    @Column()
    skills!: String;

    @Column()
    education!: String;

    @Column()
    jobType!: String;

    @Column()
    phone!: Number;

    @Column()
    rateExpected!: Number;

    @Column()
    location!: String;

    @OneToMany(() => ApplyJob, (applyJob) => applyJob.idApplicant)
    applyJob!: ApplyJob[]
}