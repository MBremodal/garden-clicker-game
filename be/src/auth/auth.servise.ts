import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dtos';

@Injectable()
export class AuthServise {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'I have signed in' };
  }

  async signup(authDto: AuthDto) {
    await this.prisma.user.create({
      data: authDto,
    });
    return { msg: 'I have singed up' };
  }

  async allUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
