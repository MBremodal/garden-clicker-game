import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthServise } from './auth.servise';
import { AuthDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthServise) {}
  @Post('signup')
  signup(@Body() authDto: AuthDto) {
    return this.authService.signup(authDto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Get()
  getAllUsers() {
    return this.authService.allUsers();
  }
}
