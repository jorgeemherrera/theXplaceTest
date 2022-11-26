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

    const dataSource = new DataSource({
        type: "mysql",
        database: "thexplace",
        username: "root",
        password: "root",
        logging: true,
        synchronize: true, // to create tables in MySQL
        entities: [JobOffer, Applicant, Company, ApplyJob]
    });
    dataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
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