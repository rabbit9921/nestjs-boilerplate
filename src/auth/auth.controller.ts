import { Controller, Get } from '@nestjs/common';
import { Param, Bind, Query } from '@nestjs/common';
import query from 'express';
@Controller('auth')
export class AuthController {
  @Get()
  aaa(): string {
    return 'Ok';
  }
  @Get(':id')
  @Bind(Param())
  findOne(params) {
    console.log(params);
    return `This action returns a #${params.id} cat`;
  }
  @Get()
  find(@Query("id") id?:string) {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
