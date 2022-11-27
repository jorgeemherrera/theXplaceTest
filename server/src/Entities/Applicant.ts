import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
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
    email!: String;

    @Column()
    skills!: String;

    @Column()
    education!: String;

    @Column()
    jobType!: String;

    @Column()
    phone!: String;

    @Column()
    rateExpected!: String;

    @Column()
    location!: String;

    @OneToMany(() => ApplyJob, (applyJob) => applyJob.idApplicant)
    applyJob!: ApplyJob[]
}


