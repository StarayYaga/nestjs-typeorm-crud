import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import UserEntity from './user.entity';
import { createUserDto } from 'src/dto/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getUsers(){
        return this.userService.findAll()
    }

    @Post()
    createUser(@Body() body: createUserDto){
        return this.userService.createUser(body)
    }

    @Put()
    updateUser(@Body() body: UserEntity){
        return this.userService.updateUser(body)
    }

    @Delete()
    deleteUser(@Body() body){
        return this.userService.deleteUser(body.id)
    }
}
