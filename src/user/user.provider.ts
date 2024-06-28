import { DataSource } from 'typeorm';
import UserEntity   from "./user.entity"

export const User = [
    {
        provide: "userRepository",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
        inject: ['DATA_SOURCE'],
    }
]
