import { Injectable, Inject, All } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User } from './user.dto';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository <UserEntity>,
    ){}

   

    async findAll(): Promise<User[]>{
        return this.userRepository.find();

    }


}