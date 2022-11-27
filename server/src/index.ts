import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { DataSource } from 'typeorm';
import { Applicant } from './Entities/Applicant';
import { Company } from './Entities/Company';
import { JobOffer } from './Entities/JobOffer';
import { schema } from './Schema/'
import { ApplyJob } from './Entities/ApplyJob';


const main = async () => {
    const stateSynchronize = false;
    const dataSource = new DataSource({
        type: "mysql",
        database: "thexplace",
        username: "root",
        password: "root",
        logging: true,
        synchronize: stateSynchronize, // to create tables in MySQL
        entities: [JobOffer, Applicant, Company, ApplyJob]
    });


    dataSource.initialize()
        .then(async () => {
            if (!stateSynchronize) {
                return console.log("Data Source has been initialized!")
            } else {
                console.log("Create Data and initialized!")
                return (
                    (dataSource                     
                        .createQueryBuilder()
                        .insert()
                        .into(JobOffer)
                        .values([
                            {
                                nameOffer: "Game designer",
                                offerStartDate: "17/04/2022",
                                offerEndDate: "18/04/2022",
                                stateActive: true,
                                ratePerHour: "20",
                                tools: "Unity, 3DMax",
                                disciplines: "Game Design",
                                jobDescription: "Game design with Unity and 3DMax",
                                jobType: "Remote"
                            },
                            {
                                nameOffer: "Game designer",
                                offerStartDate: "17/04/2022",
                                offerEndDate: "18/04/2022",
                                stateActive: true,
                                ratePerHour: "20",
                                tools: "Unity, 3DMax",
                                disciplines: "Game Design",
                                jobDescription: "Game design with Unity and 3DMax",
                                jobType: "Remote"
                            },
                            {
                                nameOffer: "Game designer",
                                offerStartDate: "17/04/2022",
                                offerEndDate: "18/04/2022",
                                stateActive: false,
                                ratePerHour: "20",
                                tools: "Unity, 3DMax",
                                disciplines: "Game Design",
                                jobDescription: "Game design with Unity and 3DMax",
                                jobType: "Remote"
                            },
                            {
                                nameOffer: "Audio Artist",
                                offerStartDate: "2022-12-01T12:00:00.000Z",
                                offerEndDate: "2023-02-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "20",
                                tools: "Reaper",
                                disciplines: "Audio, Art",
                                jobDescription: "Audio mixer",
                                jobType: "hybrid",
                            },
                            {
                                nameOffer: "Senior Animator",
                                offerStartDate: "2023-01-01T12:00:00.000Z",
                                offerEndDate: "2023-02-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "30",
                                tools: "Maya, Unreal",
                                disciplines: "Art, Animation",
                                jobDescription: "Create innovative gameplay, in-game cinematic experiences and epic moments for brand new, next generation console and PC games.",
                                jobType: "Remote",
                            },
                            {
                                nameOffer: "Senior Animator",
                                offerStartDate: "2023-01-01T12:00:00.000Z",
                                offerEndDate: "2023-02-01T12:00:00.000Z",
                                stateActive: false,
                                ratePerHour: "100",
                                tools: "Maya, Unreal",
                                disciplines: "Art, Animation",
                                jobDescription: "Create innovative gameplay, in-game cinematic experiences and epic moments for brand new, next generation console and PC games.",
                                jobType: "Remote",
                            },
                            {
                                nameOffer: "Senior Animator",
                                offerStartDate: "2021-01-01T12:00:00.000Z",
                                offerEndDate: "2023-02-01T12:00:00.000Z",
                                stateActive: false,
                                ratePerHour: "100",
                                tools: "Maya, Unreal",
                                disciplines: "Art, Animation",
                                jobDescription: "Create innovative gameplay, in-game cinematic experiences and epic moments for brand new, next generation console and PC games.",
                                jobType: "Remote",
                            },
                            {
                                nameOffer: "Senior Back End Developer",
                                offerStartDate: "2022-01-01T12:00:00.000Z",
                                offerEndDate: "2023-02-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "30",
                                tools: "Node.Js, Typescript, Git, AWS, Redis",
                                disciplines: "Engineering",
                                jobDescription: "Create innovative gameplay, in-game cinematic experiences and epic moments for brand new, next generation console and PC games.",
                                jobType: "On-site",
                            },
                            {
                                nameOffer: "Senior Back End Developer",
                                offerStartDate: "2022-05-01T12:00:00.000Z",
                                offerEndDate: "2023-06-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "150",
                                tools: "Node.Js, Typescript, Git, AWS, Redis",
                                disciplines: "Engineering",
                                jobDescription: "Create innovative gameplay, in-game cinematic experiences and epic moments for brand new, next generation console and PC games.",
                                jobType: "On-site",
                            },
                            {
                                nameOffer: "Senior Unity Gameplay Developer",
                                offerStartDate: "2023-01-01T12:00:00.000Z",
                                offerEndDate: "2023-02-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "60",
                                tools: "Unity, C#, Slack, Git",
                                disciplines: "Engineering",
                                jobDescription: "Designing, planning, prototyping, and shipping the items that go into our monthly updates that bring our players joy.",
                                jobType: "Remote",
                            },
                            {
                                nameOffer: "Lead Audio Designer",
                                offerStartDate: "2022-05-01T12:00:00.000Z",
                                offerEndDate: "2022-08-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "40",
                                tools: "Reaper, iZotope RX",
                                disciplines: "Audio",
                                jobDescription: "Responsible of ensuring that the audio fidelity, integration and audio pipeline are of the highest possible standard and serve the game vision.",
                                jobType: "Remote",
                            },
                            {
                                nameOffer: "3D Envirometn Art Intern",
                                offerStartDate: "2023-02-01T12:00:00.000Z",
                                offerEndDate: "2023-04-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "20",
                                tools: "Maya ,Adobe Photoshop, Unreal",
                                disciplines: "Art",
                                jobDescription: "As an Intern on the Environment Art team, you will help us build out our world and create something fun and adventurous for our players.",
                                jobType: "Remote",
                            },
                            {
                                nameOffer: "Senior Game Economy Designer",
                                offerStartDate: "2023-01-01T12:00:00.000Z",
                                offerEndDate: "2023-05-01T12:00:00.000Z",
                                stateActive: true,
                                ratePerHour: "80",
                                tools: "Unity, Confluence, Slack",
                                disciplines: "Game Design, Economy",
                                jobDescription: "You'll make a significant impact on many games in our portfolio spanning different genres, platforms and hit franchises.",
                                jobType: "hybrid",
                            },
                            {
                              nameOffer: "Game Director",
                              offerStartDate: "2023-01-01T12:00:00.000Z",
                              offerEndDate: "2023-05-01T12:00:00.000Z",
                              stateActive: true,
                              ratePerHour: "100",
                              tools: "Adobe Photoshop, Confluence, Jir, Slack",
                              disciplines: "Game Design",
                              jobDescription: "The Game Director is the vision owner and directly responsible for all aspects of achieving the value for our clients and players everywhere.",
                              jobType: "hybrid",
                              },
                        ])
                        .execute()),
                   ( dataSource 
                        .createQueryBuilder()
                        .insert()
                        .into(Company)
                        .values([
                            {
                                nameCompany: "Acme Company",
                                description: "The ACME Corporation is a name for the fictional corporation appearing in various Warner Bros. cartoon shorts, where it was used as a running gag due to their wide array of products that are dangerous, unreliable or preposterou"
                            },
                            {
                                nameCompany: "Fun Artronics",
                                description: "Penalty Soccer is a football game with easy rules: "
                            },
                            {
                                nameCompany: "3 Pines",
                                description: "We are the best company in the world"
                            },
                            {
                                nameCompany: "Cute Cat Games",
                                description: "Our company is dedicated to making cat video games, so it goes without saying that if you don't like cats, don't apply. Thank you"
                            },
                            {
                                nameCompany: "Elephant in the Room",
                                description: "an elephant does not fit in a room ;)"
                            },
                            {
                                nameCompany: "Coconaut",
                                description: "We are the best company in the world"
                            },
                        ],)
                        .execute())
                );
            }

        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        });

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true,

    }));
    app.listen(3001, () => {
        console.log('server running in port 3001')
    });
}

main().catch((err) => {
    console.log(err);
});