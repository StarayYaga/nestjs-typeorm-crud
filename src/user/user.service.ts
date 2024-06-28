import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from './user.entity';
import { createUserDto } from 'src/dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('userRepository')
        private userRepository: Repository<UserEntity>,
      ) {}

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async createUser(user: createUserDto): Promise<UserEntity>{ 
        const customer = this.userRepository.create(user)
        return this.userRepository.save(customer)
    }

    async updateUser(user: UserEntity): Promise<UserEntity>{
        const customer = await this.userRepository.findOneBy({
            id: user.id
        })
        await this.userRepository.merge(user)
        return await this.userRepository.save(user)
    }

    async deleteUser(id:number){
        return await this.userRepository.delete(id)
    }
}
