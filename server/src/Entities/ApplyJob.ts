import { BaseEntity, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import { JobOffer } from './JobOffer';
import { Applicant } from './Applicant';

@Entity()
export class ApplyJob extends BaseEntity {

    @PrimaryGeneratedColumn()
    idApplyJob!: number;

    @ManyToOne(() => Applicant, (applicant) => applicant.applyJob)
    idApplicant!: Applicant

    @ManyToOne(() => JobOffer, (jobOffer) => jobOffer.applyJob)
    idJobOffer!: Applicant
}