import { Controller, Get, Post, Delete,Put, Body,UseGuards,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.dto';
import { ApiResponse } from '@nestjs/swagger';




@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

   
    @Get()
   
    async findAll(){
        return 'users root';
    }
  
}
