import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";


const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "exampledb",
    host: "localhost",
    port: 5432,
    username: "exampleuser",
    password: "examplepass",
    entities: [User],
    synchronize: true,
}

export default config;