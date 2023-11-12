import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export interface IAuthDto {
  email: string;
  password: string;
  firstname?: string;
}

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  firstName: string;
}
